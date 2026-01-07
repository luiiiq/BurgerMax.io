export default function animaScroll(sections) {
  const sectionsLista = document.querySelectorAll(sections);

  if (sectionsLista.length) {
    function animaSecao() {
      sectionsLista.forEach((section) => {
        const windowMetade = window.innerHeight * 0.6;
        const sectionTopo = section.getBoundingClientRect().top;
        const sectionVisivel = sectionTopo - windowMetade;
        if (sectionVisivel < 0) {
          section.classList.add("ativar-scroll");
        }
      });
    }
    animaSecao();

    window.addEventListener("scroll", animaSecao);
  }
}
