export default class DataFuncionamento {
  constructor(liFuncionamento) {
    this.liElemento = document.querySelector(liFuncionamento);
  };

  horarioAgora() {
    this.agoraHoras = new Date();
    this.horario = this.agoraHoras.getHours();
    return this.horario;
  };

  semanaAgora() {
    this.agoraSemana = new Date();
    this.semana = this.agoraSemana.getDay();
    return this.semana;
  };

  dataCompleta() {
    const limparHorario = this.horarioAberto.split("-").map(Number);
    const limparSemana = this.semanaAberta.split(",").map(Number);

    if (
      this.horarioAgora() >= limparHorario[0] &&
      this.horarioAgora() <= limparHorario[limparHorario.length - 1] &&
      limparSemana.includes(this.semanaAgora())
    ) {
      this.liElemento.classList.add("horario-aberto");
    };
  };

  init() {
    if (!this.liElemento) return;
    this.semanaAberta = this.liElemento.dataset.semana;
    this.horarioAberto = this.liElemento.dataset.horario;
    this.dataCompleta();
    return this;
  };
};
