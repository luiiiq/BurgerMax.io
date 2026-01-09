export default class Regexp_Pagamento {
  constructor(email, cpf, cep, inputs) {
    this.email = document.querySelector(email);
    this.cpf = document.querySelector(cpf);
    this.cep = document.querySelector(cep);
    this.inputs = document.querySelectorAll(inputs);
    this.validarEmail = this.validarEmail.bind(this);
    this.validarCpf = this.validarCpf.bind(this);
    this.validarCep = this.validarCep.bind(this);
  };

  // ! CEP
  formatarCep() {
    const cepLimpo = cep.value.replace(/\D/g, "");
    const cepConstruido = cepLimpo.replace(/(\d{5})(\d{3})/g, "$1-$2");
    return cepConstruido;
  };

  validarCep() {
    const valor = this.cep.value;
    const matchCep = valor.match(/\d{5}[-\s]?\d{3}/);
    if (matchCep && matchCep[0] === valor) {
      this.cep.classList.remove("invalido");
      this.cep.nextElementSibling.classList.remove("ativar-erro");
      this.cep.classList.add("valido");
      this.cep.value = this.formatarCep(valor);
    } else if (this.cep.value.trim() === "") {
      this.cep.classList.remove("invalido");
      this.cep.classList.remove("valido");
      this.cep.nextElementSibling.classList.remove("ativar-erro");
    } else {
      this.cep.classList.remove("valido");
      this.cep.classList.add("invalido");
      this.cep.nextElementSibling.classList.add("ativar-erro");
    }
  };

  // ! CPF
  formatarCpf() {
    const cpfLimpo = this.cpf.value.replace(/\D/g, "");
    const cpfConstruido = cpfLimpo.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/g,
      "$1.$2.$3-$4",
    );
    return cpfConstruido;
  };

  validarCpf() {
    const valor = this.cpf.value;
    const matchCpf = valor.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
    if (matchCpf && matchCpf[0] === valor) {
      this.cpf.classList.remove("invalido");
      this.cpf.nextElementSibling.classList.remove("ativar-erro");
      this.cpf.classList.add("valido");
      this.cpf.value = this.formatarCpf(valor);
    } else if (this.cpf.value.trim() === "") {
      this.cpf.classList.remove("invalido");
      this.cpf.classList.remove("valido");
      this.cpf.nextElementSibling.classList.remove("ativar-erro");
    } else {
      this.cpf.classList.remove("valido");
      this.cpf.classList.add("invalido");
      this.cpf.nextElementSibling.classList.add("ativar-erro");
    };
  };

  // ! Email
  validarEmail() {
    const valorEmail = this.email.value;
    const matchEmail = valorEmail.match(/[\w.-]+@[\w-]+\.[\w-.]+/gi);
    if (matchEmail) {
      this.email.classList.remove("invalido");
      this.email.nextElementSibling.classList.remove("ativar-erro");
      this.email.classList.add("valido");
    } else if (this.email.value.trim() === "") {
      this.email.classList.remove("invalido");
      this.email.classList.remove("valido");
      this.email.nextElementSibling.classList.remove("ativar-erro");
    } else {
      this.email.classList.remove("valido");
      this.email.classList.add("invalido");
      this.email.nextElementSibling.classList.add("ativar-erro");
    }
  };

  // ! Span do Erro
  adicionarSpanAoErro() {
    const spanElemento = document.createElement("span");
    spanElemento.classList.add("erro-validacao");
    spanElemento.innerText = `Email Inválido!`;
    this.email.parentElement.insertBefore(spanElemento, this.email.nextElementSibling);

    const spanCpf = document.createElement("span");
    spanCpf.classList.add("erro-validacao");
    spanCpf.innerText = `CPF Inválido!`;
    this.cpf.parentElement.insertBefore(spanCpf, this.cpf.nextElementSibling);

    const spanCep = document.createElement("span");
    spanCep.classList.add("erro-validacao");
    spanCep.innerText = `CEP Inválido!`;
    this.cep.parentElement.insertBefore(spanCep, this.cep.nextElementSibling);
  };

  adicionarEvento() {
    this.email.addEventListener("change", this.validarEmail);
    this.cpf.addEventListener("change", this.validarCpf);
    this.cep.addEventListener("change", this.validarCep);
    this.inputs.forEach((input) => {
      input.addEventListener("change", () => {
        input.classList.add("validar-input");
      });
    });
  };

  init() {
    if (this.email && this.cpf && this.cep && this.inputs.length) {
      this.adicionarEvento();
      this.adicionarSpanAoErro();
    };
    return this;
  };
};
