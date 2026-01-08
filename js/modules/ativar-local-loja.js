export default class LocalLoja {
  constructor(aside, deletar) {
    this.asideElemento = document.querySelector(aside);
    this.deletarElemento = document.querySelector(deletar);
    this.desativarElemento = this.desativarElemento.bind(this);
  };

  desativarElemento() {
    this.asideElemento.classList.add("desativado");
  };

  adicionarDesativarEvent() {
    this.deletarElemento.addEventListener("click", this.desativarElemento);
  };

  init() {
    if (this.asideElemento && this.deletarElemento) {
      this.adicionarDesativarEvent();
    };
    return this;
  };
};
