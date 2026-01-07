export default function eliminarBotaoEventos(botaoMsg, inputsMsg, textarea) {
  const botaoEnviarMsg = document.querySelector(botaoMsg);
  const listaInputsMsg = document.querySelectorAll(inputsMsg);
  const textareaElemento = document.querySelector(textarea);

  if (botaoEnviarMsg && listaInputsMsg.length && textareaElemento) {
    function desativarPadrao(event) {
      const msgLimpa = textareaElemento.value.trim();
      let todosPreenchidos = true;
      listaInputsMsg.forEach((input) => {
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
      }
    }
    botaoEnviarMsg.addEventListener("click", desativarPadrao);
  }
}
