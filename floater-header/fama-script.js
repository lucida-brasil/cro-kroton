var floaterTeste = {
  openFloater: false,
  debouncer: null,
  lastScroll: window.pageXOffset || document.documentElement.scrollTop || 0,
  openedOnce: false,
  init: function() {
    this.createMarkup();
    this.bind();
    // this.autoStart();
  },
  createMarkup: function() {
    var markup = '<div class="floater-container"><button class="floater-init" title="Inscreva-se!"><svg width="20" height="18" class="cart" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.6247 0.5H2.37538C1.34126 0.5 0.500488 1.34077 0.500488 2.37489V10.8119C0.500488 11.846 1.34126 12.6868 2.37538 12.6868H5.18771V15.1476C5.18771 15.4347 5.51582 15.6017 5.74725 15.4317L9.40622 12.6868H13.6247C14.6588 12.6868 15.4996 11.846 15.4996 10.8119V2.37489C15.4996 1.34077 14.6588 0.5 13.6247 0.5Z" fill="white"/></svg><svg width="27" height="27" class="close" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.4304 17.4974L16.116 13.1829L20.2343 9.06463C20.7396 8.55928 20.7201 7.72011 20.1907 7.19069L19.2319 6.23193C18.7025 5.70252 17.8633 5.683 17.358 6.18835L13.2397 10.3067L8.92527 5.99224C8.39586 5.46283 7.55669 5.44331 7.05134 5.94866L6.13616 6.86384C5.63081 7.36919 5.65032 8.20837 6.17974 8.73778L10.4942 13.0522L6.37585 17.1705C5.8705 17.6759 5.89001 18.515 6.41943 19.0444L7.37819 20.0032C7.9076 20.5326 8.74677 20.5521 9.25213 20.0468L13.3704 15.9285L17.6848 20.2429C18.2143 20.7723 19.0534 20.7918 19.5588 20.2865L20.474 19.3713C20.9793 18.8659 20.9598 18.0268 20.4304 17.4974Z" fill="black"/></svg></button><div class="caixa"><button class="floater-action floater-call-me" title="Ligamos para você"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.52087 7.01561C6.52087 6.46917 6.07773 6.02602 5.53129 6.02602H5.0365C3.94332 6.02602 3.05733 6.91201 3.05733 8.00519V9.48956C3.05733 10.5827 3.94332 11.4687 5.0365 11.4687H5.53129C6.07773 11.4687 6.52087 11.0256 6.52087 10.4791V7.01561ZM11.9636 11.4687C13.0568 11.4687 13.9427 10.5827 13.9427 9.48956V8.00519C13.9427 6.91201 13.0568 6.02602 11.9636 6.02602H11.4688C10.9224 6.02602 10.4792 6.46917 10.4792 7.01561V10.4791C10.4792 11.0256 10.9224 11.4687 11.4688 11.4687H11.9636ZM8.50004 0.583313C4.08341 0.583313 0.725008 4.25807 0.583374 8.49998V8.99477C0.583374 9.26814 0.804793 9.48956 1.07817 9.48956H1.57296C1.84633 9.48956 2.06775 9.26814 2.06775 8.99477V8.49998C2.06775 4.95325 4.95331 2.06769 8.50004 2.06769C12.0468 2.06769 14.9323 4.95325 14.9323 8.49998H14.9286C14.9311 8.57513 14.9323 13.6248 14.9323 13.6248C14.9323 14.3469 14.3469 14.9323 13.6248 14.9323H10.4792C10.4792 14.1125 9.81464 13.4479 8.99483 13.4479H8.00525C7.18544 13.4479 6.52087 14.1125 6.52087 14.9323C6.52087 15.7521 7.18544 16.4166 8.00525 16.4166H13.6248C15.1667 16.4166 16.4167 15.1667 16.4167 13.6248V8.49998C16.2751 4.25807 12.9167 0.583313 8.50004 0.583313Z" fill="black"/></svg><span>Ligamos para você</span></button><button class="floater-action floater-call" title="Televendas"><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.1077 0.863888L11.3148 0.160778C11.0113 0.0846076 10.6998 0.257455 10.5763 0.567996L9.28722 3.84918C9.17443 4.13628 9.24963 4.47319 9.47252 4.66947L11.0999 6.12257C10.1332 8.36959 8.44398 10.2387 6.34124 11.3139L5.00923 9.53851C4.82662 9.29535 4.52047 9.21332 4.25729 9.33636L1.24954 10.7426C0.962192 10.8803 0.803748 11.2201 0.87357 11.5512L1.51809 14.598C1.58523 14.9144 1.84303 15.1429 2.14649 15.1429C9.02404 15.1429 14.6072 9.06391 14.6072 1.54942C14.6072 1.2213 14.4004 0.937129 14.1077 0.863888Z" fill="black"/></svg><span>Televendas</span></button><button class="floater-action floater-chat" title="Nosso Chat"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.35711 0.142883C3.82 0.142883 0.142822 3.40851 0.142822 7.4388C0.142822 9.1786 0.829485 10.7711 1.97178 12.0233C1.5707 13.7912 0.229457 15.3661 0.213414 15.3836C0.142822 15.4643 0.12357 15.5836 0.165283 15.6888C0.206996 15.794 0.29684 15.8572 0.399519 15.8572C2.52689 15.8572 4.12162 14.7417 4.91096 14.0542C5.96021 14.4857 7.12497 14.7347 8.35711 14.7347C12.8942 14.7347 16.5714 11.4691 16.5714 7.4388C16.5714 3.40851 12.8942 0.142883 8.35711 0.142883Z" fill="black"/></svg><span>Nosso Chat</span></button><button class="floater-action floater-whatsapp" title="WhatsApp"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5035 2.32254C12.0338 0.91629 10.0765 0.142853 7.99646 0.142853C3.70309 0.142853 0.209468 3.47767 0.209468 7.57589C0.209468 8.88504 0.567248 10.1641 1.24773 11.2924L0.142822 15.1429L4.27133 14.1083C5.40781 14.7009 6.6881 15.0123 7.99295 15.0123H7.99646C12.2863 15.0123 15.8571 11.6775 15.8571 7.57924C15.8571 5.59375 14.9732 3.72879 13.5035 2.32254ZM7.99646 13.76C6.83192 13.76 5.69193 13.462 4.69926 12.8995L4.46425 12.7656L2.01591 13.3783L2.66833 11.0982L2.514 10.8638C1.86508 9.87946 1.52484 8.74442 1.52484 7.57589C1.52484 4.17075 4.42917 1.39843 7.99997 1.39843C9.72924 1.39843 11.3533 2.04129 12.5739 3.20982C13.7946 4.37834 14.5452 5.92857 14.5417 7.57924C14.5417 10.9877 11.5637 13.76 7.99646 13.76ZM11.5462 9.13281C11.3533 9.03906 10.3957 8.5904 10.2168 8.53013C10.0379 8.46651 9.90813 8.43638 9.77835 8.62388C9.64856 8.81138 9.27675 9.22656 9.161 9.35379C9.04875 9.47767 8.933 9.49442 8.74008 9.40067C7.59659 8.85491 6.84595 8.42633 6.0918 7.19084C5.89187 6.86272 6.29174 6.88616 6.66355 6.17633C6.72669 6.05245 6.69512 5.94531 6.64601 5.85156C6.5969 5.75781 6.20755 4.84375 6.0462 4.47209C5.88836 4.11049 5.72701 4.16071 5.60775 4.15401C5.4955 4.14732 5.36572 4.14732 5.23593 4.14732C5.10615 4.14732 4.89569 4.19419 4.7168 4.37834C4.53791 4.56584 4.03632 5.0145 4.03632 5.92857C4.03632 6.84263 4.73434 7.72656 4.82905 7.85044C4.92726 7.97433 6.20054 9.84933 8.1543 10.6562C9.389 11.1652 9.87305 11.2087 10.4904 11.1216C10.8657 11.0681 11.6409 10.673 11.8023 10.2377C11.9636 9.80245 11.9636 9.4308 11.9145 9.35379C11.8689 9.27008 11.7391 9.22321 11.5462 9.13281Z" fill="black"/></svg><span>WhatsApp</span></button><button class="floater-action floater-inscreva-se" title="Aqui mesmo no site"><svg width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><path d="M7.95001 2.36727L11.4505 5.61783L3.84938 12.6763L0.728442 12.9962C0.31064 13.0391 -0.0423582 12.7111 0.00412498 12.3231L0.351382 9.42293L7.95001 2.36727ZM13.6155 1.88332L11.9719 0.357062C11.4592 -0.119021 10.6277 -0.119021 10.115 0.357062L8.56878 1.79293L12.0692 5.04349L13.6155 3.60762C14.1282 3.13129 14.1282 2.3594 13.6155 1.88332Z" fill="black"/></svg><span>Aqui mesmo no site</span></button><span class="titulo">Nós te ajudamos!<br>Escolha uma forma de inscrição:</span></div></div>';
    parser = new DOMParser();
    doc = parser.parseFromString(markup, "text/html");
    for (var elem of doc.body.childNodes) {
      document.querySelector('body').appendChild(elem);
    }
    var zap = '<div class="wa-floater-container"><div class="wa-floater-header"><span class="circle"><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPdJREFUeNpiZMAG+s4rAMl6IFZgwAFYGRgu/C4yLGTBofk8EAsw4AGMzEwXQDQTFrl6Qpr52FkZlAV5NoLYcBeYrXwI0tT/7fffBC5WZnz6HwBx46lw+QMoBgDBeiB2QNL8AYgTgQo34PUK1HYDqL/BgI2ZkUGen32BhRTvQmTFudpcB9ANgLkgAEQoC3IwmEjwgA0AggQoxrAQmwEMPGzMDFbSvIT8zoDLAHtuVmwRwnAAKTwa8RmADUwA+rmQgQBgwiP3kYEIwMRAIWAiNdBwGiDBzYYud4EkA8S5WVFCHxiARBkAjgU7Wb4LSAYcBMUAsWEAEGAAjKcsXIVUUdgAAAAASUVORK5CYII=" alt="Logo fama"></span><div class="txt"><strong>fama</strong><span>Online</span></div></div><div class="wa-floater-messages"><div class="wa-floater-message"><p>Olá!<br>Para prosseguir com o atendimento, vamos precisar de algumas informações:</p></div><div class="wa-floater-fields"><label><span>Qual o seu nome completo?*</span><input type="text" name="nome-completo" id="nome-completo"></label><label><span>Qual o número do seu celular?*</span><input type="text" name="telefone-celular" id="telefone-celular"></label><label><input type="checkbox" name="consentimento" id="consentimento"><span>Eu concordo em receber contato no WhatsApp.</span></label><button>Iniciar Conversa</button></div></div></div>';
    parser = new DOMParser();
    doc = parser.parseFromString(zap, 'text/html');
    for (var elem of doc.body.childNodes) {
      document.querySelector('body').appendChild(elem);
    }
    var ctc = document.createElement('iframe');
    ctc.src = 'about:blank';
    ctc.className = 'callme';
    document.body.appendChild(ctc);

    var w = document.createElement('div');
    w.className = 'widget-container';
    w.id = 'funil_widget';
    w.setAttribute('brand', 'FAMA');
    w.setAttribute('type', 'Graduação');
    w.setAttribute('color', '#F5821F');
    w.setAttribute('domaingraduation', 'https://www.faculdadedemacapa.com.br/inscricao');
    document.body.appendChild(w);
  },
  bind: function() {
    var _this = this;
    var init = document.querySelector('.floater-container button.floater-init');

    init.addEventListener('click', function() {
      _this.sendEvent('fama:teste', 'floater:inicio', 'clique:botao');
      if (_this.openedOnce == false) {
        _this.openedOnce = true;
      }
      if (!init.classList.contains('init-x')) {
        document.querySelector('.floater-init').classList.add('open');
        document.querySelector('.floater-container .caixa').classList.add('active');
        _this.cS('close');
        var lineItem = Array.from(document.querySelectorAll('.floater-container .floater-action'));
        if (_this.openFloater) {
          _this.openFloater = false;
          lineItem = lineItem.slice().reverse();
        } else {
          _this.openFloater = true;
        }
        lineItem.forEach(function(el, index) {
          setTimeout(function() {
            lineItem[index].classList.toggle('active');
          }, 50 * index);
        });
      } else if (init.classList.contains('init-x')) {
        document.querySelector('.floater-container .caixa').classList.remove('active');
        _this.hM();
        _this.hA();
        _this.cS('start')
      }
    });

    var agora = document.querySelector('.floater-container button.floater-inscreva-se');
    agora.addEventListener('click', function() {
      _this.sendEvent('fama:teste', 'floater:widget-inscreva-se', 'clique:botao');
      _this.hA();
      _this.hM();
      _this.cS('close');

      window.location.href = 'https://www.faculdadedemacapa.com.br/inscricao?origem=floater';
    });

    var ctc = document.querySelector('.floater-container button.floater-call-me');
    ctc.addEventListener('click', function() {
      _this.sendEvent('fama:teste', 'floater:ctc', 'clique:botao');
      _this.hA();
      _this.hM();
      _this.cS('close');
      document.querySelector('iframe.callme').src = 'https://bluecore-kroton-ctc.azurewebsites.net/embed/fama';
      document.querySelector('iframe.callme').classList.toggle('active');
    });

    var call = document.querySelector('.floater-container button.floater-call');
    call.addEventListener('click', function() {
      _this.hA();
      _this.sendEvent('fama:teste', 'floater:ligar', 'clique:ligar');
      _this.hM();
      _this.cS('close');
      window.location.href = 'tel:08008815241';
    });

    var chatbot = document.querySelector('.floater-container button.floater-chat');
    chatbot.addEventListener('click', function() {
      _this.sendEvent('fama:teste', 'floater:chatbot', 'clique:botao');
      _this.hA();
      _this.hM();
      _this.cS('close');
      document.querySelector('#blip-chat-container #chatbot-cta img').click();
    });

    var wap = document.querySelector('.floater-container button.floater-whatsapp');
    wap.addEventListener('click', function() {
      _this.sendEvent('fama:teste', 'floater:whatsapp', 'clique:botao');
      _this.hA();
      _this.hM();
      _this.cS('close');
      document.querySelector('.wa-floater-container').classList.toggle('active');
    });

    var wapfields = document.querySelectorAll('.wa-floater-container input');
    wapfields.forEach(function(el) {
      this.addEventListener('change', function() {
        _this.sendEvent('fama:teste', 'floater:whatsapp', 'preencheu:' + el.name);
      })
    })

    var wapsend = document.querySelector('.wa-floater-container button');
    wapsend.addEventListener('click', function() {
      _this.sendEvent('fama:teste', 'floater:whatsapp', 'clique:iniciar-conversa');

      var consent = document.querySelector('.wa-floater-container #consentimento').checked;
      var nome = document.querySelector('.wa-floater-container #nome-completo').value;
      var fone = document.querySelector('.wa-floater-container #telefone-celular').value;
      fone = fone.replace(/\D/g, '');

      var murmur = sessionStorage.getItem('murmur') || localStorage.getItem('murmur');
      var fp = '';
      var fpdedup = '';
      var cid = '';
      try {
        murmur = JSON.parse(murmur);
        fp = murmur.fp_h + '.' + murmur.fp + '.' + murmur.fp_d;
        fpdedup = murmur.fp_dd;
        var ga = window[window.GoogleAnalyticsObject];
        cid = ga.getAll()[0].get('clientId');
      } catch (e) {}

      var data = {
        name: nome,
        phone: fone,
        cid: cid,
        fp: fp,
        fpdedup: fpdedup,
        consent: consent
      };

      fetch('https://us-central1-kroton-analytics.cloudfunctions.net/WhatsApp_Porteira', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      setTimeout(function() {
        window.location.href = 'https://api.whatsapp.com/send?1=pt_BR&phone=5511991148762&text=Ol%C3%A1%20%F0%9F%99%82';
      }, 300)
    })

    window.addEventListener('scroll', function(event) {
      if (!_this.debouncer) {
        _this.debouncer = setTimeout(function() {
          _this.debouncer = null;
          var st = window.pageXOffset || document.documentElement.scrollTop;
          if (st < _this.lastScroll) {
            _this.cS('start', true);
          } else {
            if (window.pageYOffset > 100) {
              _this.cS('scroll', true);
            } else {
              _this.cS('start', true);
            }
          }
          _this.lastScroll = st <= 0 ? 0 : st;
        }, 100)
      }
    })

  },
  hA: function() {
    document.querySelector('.floater-init').classList.remove('open');
    document.querySelectorAll('.floater-action').forEach(function(el) {
      el.classList.remove('active');
    });
    document.querySelector('.floater-container .caixa').classList.remove('active');
  },
  hM: function() {
    document.querySelectorAll('.wa-floater-container.active, iframe.callme.active, .widget-container.active').forEach(function(el) {
      el.classList.remove('active')
    })
    var chatbot = document.querySelector('#blip-chat-container #blip-chat-iframe.blip-chat-iframe-opened');
    if (chatbot) {
      chatbot.classList.remove('blip-chat-iframe-opened');
    }
    document.querySelectorAll('html, body').forEach(function(el) {
      el.classList.remove('chatParent');
    })
  },
  cS: function(status = null, scroll = false) {
    var but = document.querySelector('.floater-container button.floater-init');
    if (scroll == false) {
      if (status == 'start') {
        but.className = 'floater-init';
      }
      if (status == 'close') {
        but.className = 'floater-init init-x';
      }
      if (status == 'scroll') {
        but.className = 'floater-init init-cart';
      }
    }
  },
  autoStart: function() {
    var _this = this;
    setTimeout(function() {
      if (_this.openedOnce == false) {
        _this.sendEvent('fama:teste', 'floater:inicio', 'auto');
        document.querySelector('.floater-container button.floater-init').click();
      }
    }, 10000);
  },
  sendEvent: function(ec, ea, el) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'ga_event',
      'eventCategory': ec,
      'eventAction': ea,
      'eventLabel': el
    })
  }
}

var headerTeste = {
  but: null,
  acompanhe: null,
  floaterCont: null,
  init: function() {
    this.createButton();
    if (window.matchMedia('(max-width: 990px)').matches) {
      this.mobile();
      this.insertButton(true);
    } else {
      this.insertButton();
    }
  },
  createButton: function() {
    this.but = document.createElement('a');
    this.but.classList.add('btn-header-inscreva-se');
    this.but.innerHTML = 'Inscreva-se';
    this.but.setAttribute('href', 'https://www.faculdadedemacapa.com.br/inscricao?origem=header');
    this.but.setAttribute('title', 'Clique aqui para inscrever-se agora!');
  },
  insertButton: function(mob = false) {
    if (mob) {
      var cont = document.createElement('div');
      cont.classList.add('second-level')
      cont.appendChild(this.acompanhe);
      cont.appendChild(this.but);
      document.querySelector('.anhanguera_ > .second-menu').appendChild(cont);
    } else {
      document.querySelector('#second-menu__nav').appendChild(this.but);
    }
    this.bind();
  },
  bind: function() {
    var _this = this;
    document.querySelector('.btn-header-inscreva-se').addEventListener('click', function() {
      _this.sendEvent('fama:teste', 'header', 'clique:inscreva-se');
    })

    document.querySelector('.lnk-header-acompanhe').addEventListener('click', function() {
      _this.sendEvent('fama:teste', 'header', 'clique:acompanhe-inscricao');
    })
  },
  mobile: function() {
    var acc = document.querySelector('.first-level-menu-container .acessibility-list');
    var hamb = document.querySelector('second-menu__hamburger');
    var nav = document.querySelector('.second-menu__nav');
    nav.insertBefore(acc, hamb);

    this.acompanhe = document.createElement('a');
    this.acompanhe.classList.add('lnk-header-acompanhe');
    this.acompanhe.innerHTML = 'Acompanhe sua inscrição';
    this.acompanhe.setAttribute('href', 'https://www.vestibulares.com.br/fama/area-candidato/login');
    this.acompanhe.setAttribute('target', '_blank');
    this.acompanhe.setAttribute('title', 'Clique aqui para acompanhar sua inscrição!');
  },
  sendEvent: function(ec, ea, el) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'ga_event',
      'eventCategory': ec,
      'eventAction': ea,
      'eventLabel': el
    })
  }
}

floaterTeste.init();
headerTeste.init();
