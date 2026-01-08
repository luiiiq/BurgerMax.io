export default class ScrollLinkSuave {
  constructor(links, opcoes) {
    this.linksLista = document.querySelectorAll(links);
    if (opcoes === undefined) {
      this.opcoes = {behavior: "smooth",block: "start"};
    } else {
      this.opcoes = opcoes;
    };
    this.linkSuave = this.linkSuave.bind(this);
  };

  linkSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.opcoes);
  };

  adicionarLinkEvent() {
    this.linksLista.forEach((link) => {
      link.addEventListener("click", (event) => {
        this.linkSuave(event);
      });
    });
  };

  init() {
    if (this.linksLista.length) {
      this.adicionarLinkEvent();
    };
    return this;
  };
};
