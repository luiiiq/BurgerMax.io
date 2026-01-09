export default class MenuMobile {
  constructor(button, menu, eventos) {
    this.menuButton = document.querySelector(button);
    this.menuLista = document.querySelector(menu);
    this.eventos = eventos;

    this.abrirMenu = this.abrirMenu.bind(this);
  };

  abrirMenu(event) {
    event.preventDefault();
    this.menuLista.classList.toggle("ativo");
    this.clicarFora(this.menuLista, ["click", "touchstart"], () => {
      this.menuLista.classList.remove("ativo");
    });
  };

  clicarFora(elemento, eventos, callback) {
    const html = document.documentElement;
    if (!elemento.hasAttribute("data-click", "")) {
      eventos.forEach((evento) => {
        setTimeout(() => {
          html.addEventListener(evento, controlarClickFora);
        });
      });
      elemento.setAttribute("data-click", "");
    };

    function controlarClickFora(event) {
      if (!elemento.contains(event.target) && event.target !== this.menuButton) {
        elemento.removeAttribute("data-click");
        eventos.forEach((evento) => {
          html.removeEventListener(evento, controlarClickFora);
        });
        callback();
      };
    };
  };

  adicionarMenuEvent() {
    this.eventos.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.abrirMenu);
    });
  };

  init() {
    if (this.menuButton && this.menuLista) {
      this.adicionarMenuEvent();
    };
    return this;
  };
};
