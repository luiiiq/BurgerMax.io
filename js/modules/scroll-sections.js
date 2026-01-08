export default class AnimaScroll {
  constructor(sections) {
    this.sectionsLista = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.scrollAtivado = this.scrollAtivado.bind(this);
  };

  scrollAtivado() {
    this.sectionsLista.forEach((section) => {
      const sectionTopo = section.getBoundingClientRect().top;
      const visivel = (sectionTopo - this.windowMetade) < 0;
      if (visivel) {
        section.classList.add('ativar-scroll');
      };
    });
  };

  init() {
    if (this.sectionsLista.length) {
      this.scrollAtivado();
      window.addEventListener('scroll', this.scrollAtivado);
    };
    return this;
  };
};
