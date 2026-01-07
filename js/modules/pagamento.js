export default function pagamento() {
  let cesta = [];
  try {
    cesta = JSON.parse(localStorage.getItem("card-info")) || [];
  } catch (e) {
    cesta = [];
  }
  const resumoPagamento = document.querySelector(".resumo-pagamento");
  if (resumoPagamento) {
    let totSub = 0;
    function subTotal() {
      totSub = 0;
      const subTotal = document.querySelectorAll(".produto h3 span");
      subTotal.forEach((span) => {
        const valorSub = Number(span.innerHTML.replace(",", "."));
        totSub += valorSub;
      });
      const resumoTitulo = document.querySelector(
        ".resumo-item h4:nth-of-type(1) span",
      );
      const precoTotal = document.querySelector(
        ".resumo-item h4:nth-of-type(3) span",
      );

      if (resumoTitulo && precoTotal) {
        resumoTitulo.innerHTML = `R$ ${totSub.toFixed(2).replace(".", ",")}`;
        precoTotal.innerHTML = `R$ ${(totSub + 10).toFixed(2).replace(".", ",")}`;
      }
    }

    let totParcelas = 0;
    function abrirParcelas() {
      totParcelas = 0;
      const total = document.querySelectorAll(".produto h3 span");
      total.forEach((span) => {
        const valor = Number(span.innerHTML.replace(",", "."));
        totParcelas += valor;
      });

      // Parcelas Value
      const parcelas_1 = document.querySelector(".uma-vez input");
      const parcelas_2 = document.querySelector(".duas-vezes input");
      parcelas_1.value = `1x de R$ ${(totParcelas + 10).toFixed(2).replace(".", ",")}`;
      parcelas_2.value = `2x de R$ ${((totParcelas + 10) / 2).toFixed(2).replace(".", ",")}`;

      // Parcelas HTML
      const parcela1Texto = document.querySelector(".uma-vez label span");
      const parcela2Texto = document.querySelector(".duas-vezes label span");

      if (parcela1Texto && parcela2Texto && parcelas_1 && parcelas_2) {
        parcela1Texto.innerHTML = parcelas_1.value;
        parcela2Texto.innerHTML = parcelas_2.value;
      }

      const seta = document.querySelector(".selecione-container");
      const selecione = document.querySelector(".selecione-container");
      if (seta && selecione) {
        function abilitarParcelas() {
          const umaVez = document.querySelector(".uma-vez");
          const duasVezes = document.querySelector(".duas-vezes");

          umaVez.classList.add("ativo");
          duasVezes.classList.add("ativo");

          const radioUmaVez = document.getElementById("1x");
          const radioDuasVezes = document.getElementById("2x");
          const selecionarParcelas = document.querySelector(
            ".selecione-container:nth-of-type(1) span",
          );

          if (radioUmaVez.checked) {
            selecionarParcelas.innerHTML = parcela1Texto.innerHTML;
            selecionarParcelas.parentElement.classList.add("parcela-ativa");
          } else if (radioDuasVezes.checked) {
            selecionarParcelas.innerHTML = parcela2Texto.innerHTML;
            selecionarParcelas.parentElement.classList.add("parcela-ativa");
          }

          function abrirConteudo() {
            clicarForaConteudo(selecione, ["click", "touchstart"], () => {
              umaVez.classList.remove("ativo");
              duasVezes.classList.remove("ativo");
            });
          }

          function clicarForaConteudo(elemento, eventos, callback) {
            const html = document.documentElement;
            if (!elemento.hasAttribute("data-fora", "")) {
              eventos.forEach((evento) => {
                setTimeout(() => {
                  html.addEventListener(evento, controlarClick);
                });
              });
              elemento.setAttribute("data-fora", "");
            }
            function controlarClick(event) {
              if (!elemento.contains(event.target)) {
                elemento.removeAttribute("data-fora");
                eventos.forEach((evento) => {
                  html.removeEventListener(evento, controlarClick);
                });
                callback();
              }
            }
          }
          abrirConteudo();
          selecione.addEventListener("click", abrirConteudo);
        }
        seta.addEventListener("click", abilitarParcelas);
      }
    }

    async function gerarResumo() {
      try {
        const div = document.createElement("div");
        div.classList.add("resumo-item");
        resumoPagamento.appendChild(div);

        const respostaResumo = await fetch(
          "../../info-cardapio-itens/cardapio-info.json",
        );
        const resumoJSON = await respostaResumo.json();

        const divTitulo = `<h2>Resumo da Compra</h2>`;
        const valoresItem = `
                        <h4>Subtotal:<span></span></h4>
                        <h4>Taxa de Entrega: R$ <span>10,00</span></h4>
                        <h4>Preço Total: R$ <span>1</span></h4>
                    `;
        const itensResumo = (div.innerHTML = cesta
          .map((itemCesta) => {
            let { id, item } = itemCesta;
            let busca = resumoJSON.find((item) => item.id === id) || [];

            const precoValor = Number(busca.preco.replace(",", "."));
            const totalValor = (precoValor * item).toFixed(2);
            const valorCorrigido = totalValor.replace(".", ",");

            return `
                        <div class="produto-container">
                            <div class="produto"><img src="${busca.img}" alt="${busca.nome}"></div>
                            <div class="produto">
                                <p>${busca.nome}</p>
                                <span>R$ ${busca.preco}</span>
                                <h3 class="total-item">Total: R$<span> ${valorCorrigido}</span></h3>
                            </div>
                            <h5><span id="unidades"> ${item} </span>unidades(s)</h5>
                        </div>
                    `;
          })
          .join(""));
        div.innerHTML = divTitulo + itensResumo + valoresItem;
      } catch (erro) {
        console.log(erro);
      }
    }
    gerarResumo().then(() => {
      subTotal();
      abrirParcelas();
    });
  }
}
