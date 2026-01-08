export default class AnimaScroll {
  constructor(sections) {
    this.sectionsLista = document.querySelectorAll(sections);
    this.animaSecao = this.animaSecao.bind(this);
  };

  animaSecao() {
    this.sectionsLista.forEach((section) => {
      const windowMetade = window.innerHeight * 0.6;
      const sectionTopo = section.getBoundingClientRect().top;
      const sectionVisivel = sectionTopo - windowMetade;
      if (sectionVisivel < 0) {
        section.classList.add("ativar-scroll");
      };
    });
  };

  adicionarScrollEvent() {
    window.addEventListener("scroll", this.animaSecao);
  };

  init() {
    if (this.sectionsLista.length) {
      this.animaSecao();
      this.adicionarScrollEvent();
    };
    return this;
  };
};
