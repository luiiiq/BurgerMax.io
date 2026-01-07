export default function menuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuLista = document.querySelector("#menu");
  const eventos = ["click", "touchstart"];

  if (menuButton && menuLista) {
    function abrirMenu(event) {
      event.preventDefault();
      menuLista.classList.toggle("ativo");
      clicarFora(menuLista, ["click", "touchstart"], () => {
        menuLista.classList.remove("ativo");
      });
    }

    function clicarFora(elemento, eventos, callback) {
      const html = document.documentElement;
      if (!elemento.hasAttribute("data-click", "")) {
        eventos.forEach((evento) => {
          setTimeout(() => {
            html.addEventListener(evento, controlarClickFora);
          });
        });
        elemento.setAttribute("data-click", "");
      }

      function controlarClickFora(event) {
        if (!elemento.contains(event.target) && event.target !== menuButton) {
          elemento.removeAttribute("data-click");
          eventos.forEach((evento) => {
            html.removeEventListener(evento, controlarClickFora);
          });
          callback();
        }
      }
    }

    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, abrirMenu);
    });
  }
}
