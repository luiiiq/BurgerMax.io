export default function accordionList(perguntas) {
  const perguntaLista = document.querySelectorAll(perguntas);

  if (perguntaLista.length) {
    function abilitarPergunta() {
      this.classList.toggle("ativo");
    }

    perguntaLista.forEach((pergunta) => {
      pergunta.addEventListener("click", abilitarPergunta);
    });
  }
}
