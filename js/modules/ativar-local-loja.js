export default function localLoja(aside, deletar) {
  const asideElemento = document.querySelector(aside);
  const deletarElemento = document.querySelector(deletar);
  if (asideElemento && deletarElemento) {
    function desativarElemento() {
      asideElemento.classList.add("desativado");
    }

    deletarElemento.addEventListener("click", desativarElemento);
  }
}
