export default function buttonFinalizarCompra() {
  const button = document.querySelector(".formulario-pagar button");
  const inputs = document.querySelectorAll(
    '.formulario-pagar input[type="text"], .formulario-pagar input[type="email"]',
  );
  const radio = document.querySelectorAll(".selecione-container input");
  const checkbox = document.querySelector(
    '.formulario-pagar input[type="checkbox"]',
  );

  let cesta = [];
  try {
    cesta = JSON.parse(localStorage.getItem("card-info")) || [];
  } catch (e) {
    cesta = [];
  }
  if (button && inputs.length && radio.length && checkbox) {
    function alterarPadrao(event) {
      const radioVerificar = radio[0].checked === true || radio[1].checked;
      const checkboxVerificar = checkbox.checked;

      let todosPreenchidos = true;
      inputs.forEach((input) => {
        if (input.value.trim() === "") {
          todosPreenchidos = false;
        }
      });

      if (todosPreenchidos && radioVerificar && checkboxVerificar) {
        event.preventDefault();
        const spanErro = document.querySelector(".parcelas .erro-parcelas");
        if (spanErro) {
          spanErro.remove();
        }
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
      }
    }

    button.addEventListener("click", alterarPadrao);
  }
}
