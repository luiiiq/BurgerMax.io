export default class AccordionList {
  constructor(perguntas) {
    this.perguntaLista = document.querySelectorAll(perguntas);
  };

  abilitarPergunta(pergunta) {
    pergunta.classList.toggle("ativo");
  };

  adicionarFaqEvent() {
    this.perguntaLista.forEach((pergunta) => {
      pergunta.addEventListener("click", () => {
        this.abilitarPergunta(pergunta);
      });
    });
  };

  init() {
    if (this.perguntaLista.length) {
      this.adicionarFaqEvent();
    };
    return this;
  };
};
