var testeEnfermagem = {
  data: null,
  link: null,
  init: function () {
    this.setInitials();
    this.getInfo();
    this.bind();
    this.legado();
  },
  legado: function () {
    // Get the modal
    var modal1 = document.getElementById("modal-1");

    // Get the button that opens the modal
    var btn1 = document.getElementById("button-1");

    // Get the <span> element that closes the modal
    var span1 = document.getElementById("close-1");

    // When the user clicks on the button, open the modal
    btn1.onclick = function () {
      modal1.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span1.onclick = function () {
      modal1.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal1) {
        modal1.style.display = "none";
      }
    };

    // Get the modal
    var modal2 = document.getElementById("modal-2");

    // Get the button that opens the modal
    var btn2 = document.getElementById("button-2");

    // Get the <span> element that closes the modal
    var span2 = document.getElementById("close-2");

    // When the user clicks on the button, open the modal
    btn2.onclick = function () {
      modal2.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span2.onclick = function () {
      modal2.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    };

    // Get the modal
    var modal3 = document.getElementById("modal-3");

    // Get the button that opens the modal
    var btn3 = document.getElementById("button-3");

    // Get the <span> element that closes the modal
    var span3 = document.getElementById("close-3");

    // When the user clicks on the button, open the modal
    btn3.onclick = function () {
      modal3.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span3.onclick = function () {
      modal3.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal3) {
        modal3.style.display = "none";
      }
    };

    // Get the modal
    var modal4 = document.getElementById("modal-4");

    // Get the button that opens the modal
    var btn4 = document.getElementById("button-4");

    // Get the <span> element that closes the modal
    var span4 = document.getElementById("close-4");

    // When the user clicks on the button, open the modal
    // btn4.onclick = function () {
    //   modal4.style.display = "block";
    // };

    // // When the user clicks on <span> (x), close the modal
    // span4.onclick = function () {
    //   modal4.style.display = "none";
    // };

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function (event) {
    //   if (event.target == modal4) {
    //     modal4.style.display = "none";
    //   }
    // };
  },
  setInitials: function () {
    this.startSelect2();
    this.link = {
      estado: "",
      cidade: "",
      unidade: "",
      modalidade: "",
      ingresso: "Vestibular Online",
      curso: "Enfermagem - Bacharelado",
    };
  },
  startSelect2: function () {
    $("select.select2").select2();
    $(".select-unit").select2({
      placeholder: "Seleciona uma unidade",
    });
  },
  compareCities: function (a, b) {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  },
  getInfo: function () {
    fetch(
      "https://d2bt5zt9194h3i.cloudfront.net/offers/fucap/filter?daysfromexam=45&size=0&brand=ANHANGUERA&course=Enfermagem%20-%20Bacharelado"
    )
      .then((response) => response.json())
      .then((data) => {
        testeEnfermagem.data = data;
        testeEnfermagem.setOptions();
        testeEnfermagem.populateModalities();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
  setOptions: function () {
    window.cidades = testeEnfermagem.data.data.aggs.states.map(function (
      state
    ) {
      return {
        text: state.key,
        children: state.citys.map(function (city) {
          return { id: state.key + "-" + city.key, text: city.key };
        }),
      };
    });
    cidades.forEach(function (el) {
      el.children.sort(testeEnfermagem.compareCities);
    });
    $(".select-city").select2({
      data: cidades,
      placeholder: "Selecione uma cidade",
    });
  },
  populateUnits: function (city) {
    var units = testeEnfermagem.data.data.aggs.units.reduce(function (
      sum,
      unit
    ) {
      if (unit.address[0].state[0].city[0].key === city) {
        sum.push({ id: unit.key, text: unit.key });
      }
      return sum;
    },
    []);
    units.unshift({ text: "Selecione uma cidade", disabled: true });
    $(".select-unit").select2("destroy").html("<option></option>").select2({
      data: units,
      placeholder: "Selecione uma unidade",
    });
  },
  populateModalities: function () {
    var mods = testeEnfermagem.data.data.aggs.modalities.map(function (mod) {
      return { id: mod.key, text: mod.key };
    });
    $(".select-modals").select2({
      data: mods,
      placeholder: "Seleciona uma modalidade",
    });
  },
  bind: function () {
    $(".select-city").on("select2:select", function (e) {
      testeEnfermagem.populateUnits(e.params.data.id.split("-")[1]);
      testeEnfermagem.link.estado = e.params.data.id.split("-")[0];
      testeEnfermagem.link.cidade = e.params.data.id.split("-")[1];
    });
    $(".select-unit").on("select2:select", function (e) {
      testeEnfermagem.link.unidade = e.params.data.id;
    });
    $(".select-modals").on("select2:select", function (e) {
      testeEnfermagem.link.modalidade = e.params.data.id;
    });
    $(".btn-inscreva-se").on("click", function () {
      if (
        Object.values(testeEnfermagem.link).every(function (p) {
          return p.length > 0;
        })
      ) {
        var url = $.param(testeEnfermagem.link);
        window.location = "https://www.anhanguera.com/inscricao?" + url;
      }
    });
    $("#vantagens-de-ser").on("slide.bs.carousel", function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 4;
      if (window.matchMedia("(max-width: 800px)").matches) {
        itemsPerSlide = 1;
      }
      var totalItems = $("#vantagens-de-ser .carousel-item").length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          if (e.direction == "left") {
            $("#vantagens-de-ser .carousel-item")
              .eq(i)
              .appendTo("#vantagens-de-ser .carousel-inner");
          } else {
            $("#vantagens-de-ser .carousel-item")
              .eq(0)
              .appendTo("#vantagens-de-ser .carousel-inner");
          }
        }
      }
    });

    $("#sua-carreira").on("slide.bs.carousel", function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      if (window.matchMedia("(max-width: 800px)").matches) {
        itemsPerSlide = 1;
      }
      var totalItems = $("#sua-carreira .carousel-item").length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          if (e.direction == "left") {
            $("#sua-carreira .carousel-item")
              .eq(i)
              .appendTo("#sua-carreira .carousel-inner");
          } else {
            $("#sua-carreira .carousel-item")
              .eq(0)
              .appendTo("#sua-carreira .carousel-inner");
          }
        }
      }
    });

    $(".carousel").on("touchstart", function (event) {
      const xClick = event.originalEvent.touches[0].pageX;
      $(this).one("touchmove", function (event) {
        const xMove = event.originalEvent.touches[0].pageX;
        const sensitivityInPx = 5;

        if (Math.floor(xClick - xMove) > sensitivityInPx) {
          $(this).carousel("next");
        } else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
          $(this).carousel("prev");
        }
      });
      $(this).on("touchend", function () {
        $(this).off("touchmove");
      });
    });
  },
};

var headerTeste = {
  but: null,
  acompanhe: null,
  floaterCont: null,
  init: function () {
    if (document.querySelectorAll('.btn-header-inscreva-se').length === 0) {
      this.createButton();
    }
    if (window.matchMedia("(max-width: 990px)").matches) {
      this.mobile();
      this.insertButton(true);
    } else {
      this.insertButton();
    }
  },
  createButton: function () {
    this.but = document.createElement("a");
    this.but.classList.add("btn-header-inscreva-se");
    this.but.innerHTML = "Inscreva-se";
    this.but.setAttribute(
      "href",
      "https://www.anhanguera.com/inscricao?origem=header"
    );
    this.but.setAttribute("title", "Clique aqui para inscrever-se agora!");
  },
  insertButton: function (mob = false) {
    if (mob) {
      var cont = document.createElement("div");
      cont.classList.add("second-level");
      cont.appendChild(this.acompanhe);
      cont.appendChild(this.but);
      document.querySelector(".anhanguera_ > .second-menu").appendChild(cont);
    } else {
      document.querySelector("#second-menu__nav").appendChild(this.but);
    }
    this.bind();
  },
  bind: function () {
    var _this = this;
    document
      .querySelector(".btn-header-inscreva-se")
      .addEventListener("click", function () {
        _this.sendEvent("anhanguera:teste", "header", "clique:inscreva-se");
      });

    // document
    //   .querySelector(".lnk-header-acompanhe")
    //   .addEventListener("click", function () {
    //     _this.sendEvent(
    //       "anhanguera:teste",
    //       "header",
    //       "clique:acompanhe-inscricao"
    //     );
    //   });
  },
  mobile: function () {
    var acc = document.querySelector(
      ".first-level-menu-container .acessibility-list"
    );
    var hamb = document.querySelector("second-menu__hamburger");
    var nav = document.querySelector(".second-menu__nav");
    nav.insertBefore(acc, hamb);

    this.acompanhe = document.createElement("a");
    this.acompanhe.classList.add("lnk-header-acompanhe");
    this.acompanhe.innerHTML = "Acompanhe sua inscrição";
    this.acompanhe.setAttribute(
      "href",
      "https://www.vestibulares.com.br/anhanguera/area-candidato/login"
    );
    this.acompanhe.setAttribute(
      "title",
      "Clique aqui para acompanhar sua inscrição!"
    );
  },
  sendEvent: function (ec, ea, el) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "ga_event",
      eventCategory: ec,
      eventAction: ea,
      eventLabel: el,
    });
  },
};

(function () {
  testeEnfermagem.init();
  headerTeste.init();
})();
