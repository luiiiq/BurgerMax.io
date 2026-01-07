export default function cardapio(cardapioGrid, diminuir, aumentar) {
  // ! Cards dos Itens
  let compras = document.querySelector(cardapioGrid);

  let cesta = [];
  try {
    cesta = JSON.parse(localStorage.getItem("card-info")) || [];
  } catch (e) {
    cesta = [];
  }

  let carrinhoIcone = document.querySelector(".js-contador");
  if (!carrinhoIcone) return;

  // ! Funções de incrementar, decrementar, atualizar e calcular itens no carrinho
  function calcular() {
    carrinhoIcone.innerHTML = cesta
      .map((elemento) => elemento.item)
      .reduce((prev, prox) => prev + prox, 0);
  }

  function atualizar(id) {
    const contador = document.querySelectorAll(".contador-wrapper span");
    let buscaPorId = cesta.find((idItem) => idItem.id === id);
    contador.forEach((elemento) => {
      if (buscaPorId.id === elemento.id) elemento.innerHTML = buscaPorId.item;
    });
    calcular();
  }

  function incrementar(event) {
    const elementoPai = event.currentTarget.parentElement.parentElement;
    const idSelecionado = elementoPai.getAttribute("id");

    let buscaPeloItem = cesta.find((item) => item.id === idSelecionado);
    if (buscaPeloItem === undefined) {
      cesta.push({
        id: idSelecionado,
        item: 1,
      });
    } else {
      buscaPeloItem.item += 1;
    }
    atualizar(idSelecionado);
    localStorage.setItem("card-info", JSON.stringify(cesta));
  }

  function decrementar(event) {
    const elementoPai = event.currentTarget.parentElement.parentElement;
    const idSelecionado = elementoPai.getAttribute("id");

    let buscaPeloItem = cesta.find((item) => item.id === idSelecionado);
    if (!buscaPeloItem) return;
    if (buscaPeloItem.item === 0) return;
    else {
      buscaPeloItem.item -= 1;
    }

    atualizar(idSelecionado);
    cesta = cesta.filter((elemento) => elemento.item !== 0);
    localStorage.setItem("card-info", JSON.stringify(cesta));
  }

  // ! Gerar Cards dos Itens
  if (compras) {
    async function gerarCompra() {
      try {
        const compraItensResposta = await fetch(
          "../../info-cardapio-itens/cardapio-info.json",
        );
        const compraJSON = await compraItensResposta.json();
        compras.innerHTML = compraJSON
          .map((elemento) => {
            let { id, nome, preco, img } = elemento;
            let buscaPorElemento =
              cesta.find((elemento) => elemento.id === id) || [];

            return `
                    <div class="opcao-item" id="${id}">
                        <div><img src="${img}" alt="Imagem - ${nome}"></div>
                        <p>${nome}</p>
                        <p class="preco">R$ ${preco} </p>
                        <div class="contador-wrapper">
                            <div class="menos"><img src="../../img/remover.svg" alt="Remover"></div>
                            <span class="contador" id="${id}">
                            ${buscaPorElemento.item === undefined ? 0 : buscaPorElemento.item}
                            </span>
                            <div class="mais"><img src="../../img/adicionar.svg" alt="Adicionar"></div>
                        </div>
                    </div>
                `;
          })
          .join("");
        calcular();
      } catch (erro) {
        console.log(erro);
      }
    }
    gerarCompra().then(() => {
      const btnDecrementar = document.querySelectorAll(diminuir);
      const btnAumentar = document.querySelectorAll(aumentar);

      btnDecrementar.forEach((diminuirElemento) => {
        diminuirElemento.addEventListener("click", decrementar);
      });

      btnAumentar.forEach((aumentarElemento) => {
        aumentarElemento.addEventListener("click", incrementar);
      });
    });
  }
}
