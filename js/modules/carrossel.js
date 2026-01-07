export default function slide(slide, wrapper, prev, prox) {
  const slideElemento = document.querySelector(slide);
  const slideWrapper = document.querySelector(wrapper);
  const slideArray = [];
  const indexSlide = {
    prev: 0,
    atual: 0,
    prox: 0,
  };
  const btnPrev = document.querySelector(prev);
  const btnProx = document.querySelector(prox);

  if (slideElemento && slideWrapper && btnPrev && btnProx) {
    function slidePosicao(slide) {
      const margin = slideWrapper.offsetWidth - slideElemento.offsetWidth;
      return -(slide.offsetLeft - margin - 20);
    }

    function slideConfig() {
      slideArray.length = 0;
      [...slideElemento.children].map((elemento) => {
        slideArray.push({
          posicao: slidePosicao(elemento),
          elemento,
        });
      });
    }

    function slideIndex(index) {
      const ultimoElemento = slideArray.length - 1;
      indexSlide.prev = index ? index - 1 : undefined;
      indexSlide.atual = index;
      indexSlide.prox = index === ultimoElemento ? undefined : index + 1;
    }

    function moverSlide(distanciaX) {
      const limiteDireito =
        slideWrapper.offsetWidth - slideElemento.scrollWidth;
      const limiteEsquerdo = 0;
      const distanciaLimitada = Math.max(
        limiteDireito,
        Math.min(distanciaX, limiteEsquerdo),
      );
      slideElemento.style.transform = `translate3d(${distanciaLimitada}px, 0, 0)`;
    }

    function mudarSlide(index) {
      moverSlide(slideArray[index].posicao);
      slideIndex(index);
    }

    function btnSlide() {
      btnPrev.addEventListener("click", slideAnterior);
      btnProx.addEventListener("click", slidePosterior);
    }

    function slideAnterior() {
      if (indexSlide.prev !== undefined) {
        mudarSlide(indexSlide.prev);
      }
    }

    function slidePosterior() {
      if (indexSlide.prox !== undefined) {
        mudarSlide(indexSlide.prox);
      }
    }

    function transicao(estado) {
      slideElemento.style.transition = estado ? "transform 0.3s" : "none";
    }

    slideConfig();
    mudarSlide(0);
    btnSlide();
    transicao(true);
  }
}
