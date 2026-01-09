export default class ButtonFinalizarCompra {
  constructor(buttonPagar, inputsLista, radioLista, checkboxPolitica) {
    this.button = document.querySelector(buttonPagar);
    this.inputs = document.querySelectorAll(inputsLista);
    this.radio = document.querySelectorAll(radioLista);
    this.checkbox = document.querySelector(checkboxPolitica);

    this.alterarPadrao = this.alterarPadrao.bind(this);
  };

  alterarPadrao(event) {
    let cesta = [];
    try {
      cesta = JSON.parse(localStorage.getItem("card-info")) || [];
    } catch (e) {
      cesta = [];
    };
    const radioVerificar = this.radio[0].checked === true || this.radio[1].checked;
    const checkboxVerificar = this.checkbox.checked;

    let todosPreenchidos = true;
    this.inputs.forEach((input) => {
      if (input.value.trim() === "") {
        todosPreenchidos = false;
      };
    });

    if (todosPreenchidos && radioVerificar && checkboxVerificar) {
      event.preventDefault();
      const spanErro = document.querySelector(".parcelas .erro-parcelas");
      if (spanErro) {
        spanErro.remove();
      };
      document.body.style.cursor = "wait";
      setTimeout(() => {
        window.alert("Sua Compra foi enviada com sucesso!.");
        window.location.href = "../index.html";
      }, 2000);
      cesta = [];
      localStorage.removeItem("card-info");
    } else if (todosPreenchidos && checkboxVerificar && !radioVerificar) {
      event.preventDefault();
      const spanElemento = document.createElement("span");
      const parcelas = document.querySelector(".parcelas");

      spanElemento.classList.add("erro-parcelas");
      spanElemento.innerText = `Parcela não foi informada!`;
      parcelas.appendChild(spanElemento);
    };
  };

  init() {
    if (this.button && this.inputs.length && this.radio.length && this.checkbox) {
      this.button.addEventListener("click", this.alterarPadrao);
    };
    return this;
  };
};
