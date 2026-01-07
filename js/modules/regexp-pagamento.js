export default function regexp_Pagamento() {
  const email = document.querySelector("#email");
  const cpf = document.querySelector("#cpf");
  const cep = document.querySelector("#cep");
  const inputs = document.querySelectorAll(
    "#nome, #sobrenome, #rua, #bairro, #cidade, #num, #complemento, #num-cartao, #codigo, #vencimento, #nome-cartao, #estado",
  );
  if (email && cpf && cep && inputs) {
    // ! CEP
    function formatarCep() {
      const cepLimpo = cep.value.replace(/\D/g, "");
      const cepConstruido = cepLimpo.replace(/(\d{5})(\d{3})/g, "$1-$2");
      return cepConstruido;
    }

    function validarCep() {
      const valor = cep.value;
      const matchCep = valor.match(/\d{5}[-\s]?\d{3}/);
      if (matchCep && matchCep[0] === valor) {
        cep.classList.remove("invalido");
        cep.nextElementSibling.classList.remove("ativar-erro");
        cep.classList.add("valido");
        cep.value = formatarCep(valor);
      } else if (cep.value.trim() === "") {
        cep.classList.remove("invalido");
        cep.classList.remove("valido");
        cep.nextElementSibling.classList.remove("ativar-erro");
      } else {
        cep.classList.remove("valido");
        cep.classList.add("invalido");
        cep.nextElementSibling.classList.add("ativar-erro");
      }
    }

    // ! CPF
    function formatarCpf() {
      const cpfLimpo = cpf.value.replace(/\D/g, "");
      const cpfConstruido = cpfLimpo.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/g,
        "$1.$2.$3-$4",
      );
      return cpfConstruido;
    }
    function validarCpf() {
      const valor = cpf.value;
      const matchCpf = valor.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
      if (matchCpf && matchCpf[0] === valor) {
        cpf.classList.remove("invalido");
        cpf.nextElementSibling.classList.remove("ativar-erro");
        cpf.classList.add("valido");
        cpf.value = formatarCpf(valor);
      } else if (cpf.value.trim() === "") {
        cpf.classList.remove("invalido");
        cpf.classList.remove("valido");
        cpf.nextElementSibling.classList.remove("ativar-erro");
      } else {
        cpf.classList.remove("valido");
        cpf.classList.add("invalido");
        cpf.nextElementSibling.classList.add("ativar-erro");
      }
    }

    // ! Email
    function validarEmail() {
      const valorEmail = email.value;
      const matchEmail = valorEmail.match(/[\w.-]+@[\w-]+\.[\w-.]+/gi);
      if (matchEmail) {
        email.classList.remove("invalido");
        email.nextElementSibling.classList.remove("ativar-erro");
        email.classList.add("valido");
      } else if (email.value.trim() === "") {
        email.classList.remove("invalido");
        email.classList.remove("valido");
        email.nextElementSibling.classList.remove("ativar-erro");
      } else {
        email.classList.remove("valido");
        email.classList.add("invalido");
        email.nextElementSibling.classList.add("ativar-erro");
      }
    }

    // ! Span do Erro
    function adicionarSpanAoErro() {
      const spanElemento = document.createElement("span");
      spanElemento.classList.add("erro-validacao");
      spanElemento.innerText = `Email Inválido!`;
      email.parentElement.insertBefore(spanElemento, email.nextElementSibling);

      const spanCpf = document.createElement("span");
      spanCpf.classList.add("erro-validacao");
      spanCpf.innerText = `CPF Inválido!`;
      cpf.parentElement.insertBefore(spanCpf, cpf.nextElementSibling);

      const spanCep = document.createElement("span");
      spanCep.classList.add("erro-validacao");
      spanCep.innerText = `CEP Inválido!`;
      cep.parentElement.insertBefore(spanCep, cep.nextElementSibling);
    }

    function adicionarEvento() {
      email.addEventListener("change", validarEmail);
      cpf.addEventListener("change", validarCpf);
      cep.addEventListener("change", validarCep);
      inputs.forEach((input) => {
        input.addEventListener("change", () => {
          input.classList.add("validar-input");
        });
      });
    }
    adicionarEvento();
    adicionarSpanAoErro();
  }
}
