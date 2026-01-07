export default function carrinho() {
  let cesta = [];
  try {
    cesta = JSON.parse(localStorage.getItem("card-info")) || [];
  } catch (e) {
    cesta = [];
  }
  let carrinhoPedido = document.querySelector("#js-pedido");
  let itensJSONGlobal = [];

  if (carrinhoPedido) {
    if (cesta.length !== 0) {
      function calcular() {
        return cesta
          .map((elemento) => elemento.item)
          .reduce((prev, prox) => prev + prox, 0);
      }

      function atualizar(id) {
        const contador = document.querySelectorAll(".contador");
        let buscaPorId = cesta.find((idItem) => idItem.id === id);
        contador.forEach((elemento) => {
          if (buscaPorId.id === elemento.id)
            elemento.innerHTML = buscaPorId.item;
        });
        calcular();
      }

      // ! Atualizar o Total (preço * item) por Item no Carrinho
      function atualizarTotalItem(id) {
        let buscaPorId = cesta.find((idItem) => idItem.id === id);
        let buscaItem = itensJSONGlobal.find((info) => info.id === id);
        if (buscaItem && buscaPorId) {
          let valor = buscaItem.preco;
          let numLimpo = valor.replace(",", ".");
          let numero = Number(numLimpo);
          let numValido = numero * buscaPorId.item;
          let totalSpan = document.querySelector(`#${id} .total-item span`);
          if (totalSpan) {
            let numHtml = numValido.toFixed(2).replace(".", ",");
            totalSpan.textContent = numHtml;
          }
        }
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
        atualizarTotalItem(idSelecionado);
        totalizarResumo();
        subTotal();
        precoTotal();
        localStorage.setItem("card-info", JSON.stringify(cesta));
      }

      function decrementar(event) {
        const elementoPai = event.currentTarget.parentElement.parentElement;
        const idSelecionado = elementoPai.getAttribute("id");

        let buscaPeloItem = cesta.find((item) => item.id === idSelecionado);
        if (!buscaPeloItem) return;

        if (buscaPeloItem.item === 0) {
          return;
        } else {
          buscaPeloItem.item -= 1;
          if (buscaPeloItem.item === 0) {
            document
              .getElementById(idSelecionado)
              .parentElement.parentElement.remove();
          }
        }

        atualizar(idSelecionado);
        atualizarTotalItem(idSelecionado);
        totalizarResumo();
        subTotal();
        precoTotal();
        cesta = cesta.filter((elemento) => elemento.item !== 0);
        localStorage.setItem("card-info", JSON.stringify(cesta));

        if (cesta.length === 0) {
          carrinhoPedido.innerHTML = `
                        <div class="carrinho-grid">
                            <div class="resumo-carrinho-vazio">
                                <img src="../../img/carrinho-adicionar.svg" alt="Icone - Adicionar ao Carrinho">
                                <p>Seu Carrinho está vazio!</p>
                                <a href="./cardapio.html">ADICIONE LANCHES</a>
                            </div>

                            <div class="total-compra">
                                <div class="compra-grid">
                                    <h1 class="h1-titulo">Seu Pedido</h1>
                                    <div class="itens">
                                        <p>Item(s):</p>
                                        <span>0</span>
                                    </div>
                                    <div class="subtotal">
                                        <p>Subtotal:</p>
                                        <span>0</span>
                                    </div>
                                    <div class="taxa">
                                        <p>Taxa de Entrega:</p>
                                        <span>R$ 0</span>
                                    </div>
                                    <div class="total">
                                        <p>Preço Total:</p>
                                        <span>R$ 0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
        }
      }

      // ! Remover Item do Carrinho ao Clicar em "REMOVER"
      function removerItem() {
        const removerBtn = document.querySelectorAll(".resumo-flex h5");
        removerBtn.forEach((btn) => {
          btn.addEventListener("click", () => {
            const id = btn.id;
            cesta = cesta.filter((elemento) => elemento.id !== id);
            localStorage.setItem("card-info", JSON.stringify(cesta));
            btn.parentElement.parentElement.remove();
            totalizarResumo();
            subTotal();
            precoTotal();
            if (cesta.length === 0) {
              carrinhoPedido.innerHTML = `
                            <div class="carrinho-grid">
                                <div class="resumo-carrinho-vazio">
                                    <img src="../../img/carrinho-adicionar.svg" alt="Icone - Adicionar ao Carrinho">
                                    <p>Seu Carrinho está vazio!</p>
                                    <a href="./cardapio.html">ADICIONE LANCHES</a>
                                </div>

                                <div class="total-compra">
                                    <div class="compra-grid">
                                        <h1 class="h1-titulo">Seu Pedido</h1>
                                        <div class="itens">
                                            <p>Item(s):</p>
                                            <span>0</span>
                                        </div>
                                        <div class="subtotal">
                                            <p>Subtotal:</p>
                                            <span>0</span>
                                        </div>
                                        <div class="taxa">
                                            <p>Taxa de Entrega:</p>
                                            <span>R$ 0</span>
                                        </div>
                                        <div class="total">
                                            <p>Preço Total:</p>
                                            <span>R$ 0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `;
            }
          });
        });
      }

      let totItens = 0;
      function totalizarResumo() {
        totItens = 0;
        cesta.forEach((elemento) => {
          totItens += elemento.item;
        });
        const itemSpan = document.querySelector(".itens span");
        if (itemSpan) {
          itemSpan.innerHTML = totItens;
        }
      }

      let totSub = 0;
      function subTotal() {
        totSub = 0;
        const subTotal = document.querySelectorAll(".resumo-flex h3 span");
        subTotal.forEach((span) => {
          const valorSub = Number(span.innerHTML.replace(",", "."));
          totSub += valorSub;
        });
        const spanSubTotal = document.querySelector(".subtotal span");
        if (spanSubTotal) {
          spanSubTotal.innerHTML = `R$ ${totSub.toFixed(2).replace(".", ",")}`;
        }
      }

      function precoTotal() {
        subTotal();
        const taxaValor = 10;
        const taxa = document.querySelector(".taxa span");
        taxa.innerHTML = "R$ 10,00";
        const valorSub = totSub;
        const precoTotal = document.querySelector(".total span");
        if (precoTotal) {
          precoTotal.innerHTML = `R$ ${(valorSub + taxaValor).toFixed(2).replace(".", ",")}`;
        }
      }

      // ! Criar os Itens do Carrinho
      async function fetchItensPedido() {
        try {
          const div = document.createElement("div");
          div.classList.add("carrinho-grid");
          carrinhoPedido.appendChild(div);

          const itensResposta = await fetch(
            "../../info-cardapio-itens/cardapio-info.json",
          );
          const itensJSON = await itensResposta.json();

          itensJSONGlobal = itensJSON;

          const itensCarrinho = (div.innerHTML = cesta
            .map((elemento) => {
              let { id, item } = elemento;
              let busca = itensJSON.find((info) => info.id === id) || [];

              let valor = busca.preco;
              let numLimpo = valor.replace(",", ".");
              let numero = Number(numLimpo);
              let numValido = Number(numero.toFixed(2)) * item;

              return `
                            <div class="resumo-carrinho-cheio">
                                <div class="resumo-flex">
                                    <div class="lanche"><img src="${busca.img}" alt="${busca.nome}"></div>
                                    <div class="resumo-info" id="${id}">
                                        <p>${busca.nome}</p>
                                        <span>R$ ${busca.preco}</span>
                                        <div class="contador-resumo">
                                            <div class="menos"><img src="../../img/remover.svg" alt="Remover"></div>
                                            <span class="contador" id="${id}">${item}</span>
                                            <div class="mais"><img src="../../img/adicionar.svg" alt="Adicionar"></div>
                                        </div>
                                        <h3 class="total-item">Total: R$<span> ${numValido.toFixed(2).replace(".", ",")}</span></h3>
                                    </div>
                                    <h5 id="${id}">REMOVER</h5>
                                </div>
                            </div>
                            `;
            })
            .join(""));
          const teste = `              
                                <div class="total-compra">
                                    <div class="compra-grid">
                                        <h1 class="h1-titulo">Seu Pedido</h1>
                                        <div class="itens">
                                            <p>Item(s):</p>
                                            <span></span>
                                        </div>
                                        <div class="subtotal">
                                            <p>Subtotal:</p>
                                            <span></span>
                                        </div>
                                        <div class="taxa">
                                            <p>Taxa de Entrega:</p>
                                            <span></span>
                                        </div>
                                        <div class="total">
                                            <p>Preço Total:</p>
                                            <span></span>
                                        </div>
                                        <div class="btn-pagamento">
                                            <a href="./pagamento.html">PAGAMENTO</a>
                                        </div>
                                    </div>
                                </div>
                            `;
          div.innerHTML = itensCarrinho + teste;
        } catch (erro) {
          console.log(erro);
        }

        calcular();
      }
      fetchItensPedido().then(() => {
        const btnDecrementar = document.querySelectorAll(".menos");
        const btnAumentar = document.querySelectorAll(".mais");

        btnDecrementar.forEach((diminuirElemento) => {
          diminuirElemento.addEventListener("click", decrementar);
        });

        btnAumentar.forEach((aumentarElemento) => {
          aumentarElemento.addEventListener("click", incrementar);
        });
        totalizarResumo();
        subTotal();
        precoTotal();
        removerItem();
      });
    } else {
      carrinhoPedido.innerHTML = `
                <div class="carrinho-grid">
                    <div class="resumo-carrinho-vazio">
                        <img src="../../img/carrinho-adicionar.svg" alt="Icone - Adicionar ao Carrinho">
                        <p>Seu Carrinho está vazio!</p>
                        <a href="./cardapio.html">ADICIONE LANCHES</a>
                    </div>

                    <div class="total-compra">
                        <div class="compra-grid">
                            <h1 class="h1-titulo">Seu Pedido</h1>
                            <div class="itens">
                                <p>Item(s):</p>
                                <span>0</span>
                            </div>
                            <div class="subtotal">
                                <p>Subtotal:</p>
                                <span>0</span>
                            </div>
                            <div class="taxa">
                                <p>Taxa de Entrega:</p>
                                <span>R$ 0</span>
                            </div>
                            <div class="total">
                                <p>Preço Total:</p>
                                <span>R$ 0</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    }
  }
}
