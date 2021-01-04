var headerTeste = {
  but: null,
  acompanhe: null,
  init: function () {
    this.createButton();
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
    this.but.setAttribute("target", "_blank");
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

    document
      .querySelector(".lnk-header-acompanhe")
      .addEventListener("click", function () {
        _this.sendEvent(
          "anhanguera:teste",
          "header",
          "clique:acompanhe-inscricao"
        );
      });
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
    this.acompanhe.setAttribute("target", "_blank");
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

headerTeste.init();
