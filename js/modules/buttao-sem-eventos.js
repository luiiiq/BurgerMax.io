export default class EliminarBotaoEventos {
  constructor(botaoMsg, inputsMsg, textarea) {
    this.botaoEnviarMsg = document.querySelector(botaoMsg);
    this.listaInputsMsg = document.querySelectorAll(inputsMsg);
    this.textareaElemento = document.querySelector(textarea);

    this.desativarPadrao = this.desativarPadrao.bind(this);
  };

  desativarPadrao(event) {
    const msgLimpa = this.textareaElemento.value.trim();
    let todosPreenchidos = true;
    this.listaInputsMsg.forEach((input) => {
      if (input.value.trim() === "") {
        todosPreenchidos = false;
      }
    });
    if (todosPreenchidos && msgLimpa !== "") {
      event.preventDefault();
      document.body.style.cursor = "wait";
      setTimeout(() => {
        window.alert("Sua mensagem foi enviada com sucesso!");
        window.location.href = "./index.html";
      }, 2000);
    };
  };

  adicionarBotaoEvent() {
    this.botaoEnviarMsg.addEventListener("click", this.desativarPadrao);
  };

  init() {
    if (this.botaoEnviarMsg && this.listaInputsMsg.length && this.textareaElemento) {
      this.adicionarBotaoEvent();
    };
    return this;
  };
};
