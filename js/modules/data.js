export default function dataFuncionamento(liFuncionamento) {
  const liElemento = document.querySelector(liFuncionamento);
  if (!liElemento) return;
  const semanaAberta = liElemento.dataset.semana;
  const horarioAberto = liElemento.dataset.horario;

  if (semanaAberta && horarioAberto) {
    function horarioAgora() {
      const agora = new Date();
      const horario = agora.getHours();
      return horario;
    }

    function semanaAgora() {
      const agora = new Date();
      const semana = agora.getDay();
      return semana;
    }

    function dataCompleta() {
      const limparHorario = horarioAberto.split("-").map(Number);
      const limparSemana = semanaAberta.split(",").map(Number);

      if (
        horarioAgora() >= limparHorario[0] &&
        horarioAgora() <= limparHorario[limparHorario.length - 1] &&
        limparSemana.includes(semanaAgora())
      ) {
        liElemento.classList.add("horario-aberto");
      }
    }
    dataCompleta();
  }
}
