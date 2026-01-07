export default function scrollLinkSuave(links) {
  const linksLista = document.querySelectorAll(links);

  if (linksLista.length) {
    function linkSuave(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    linksLista.forEach((link) => {
      link.addEventListener("click", linkSuave);
    });
  }
}
