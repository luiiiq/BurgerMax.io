import ScrollLinkSuave from "./modules/scroll-link-suave.js";
import localLoja from "./modules/ativar-local-loja.js";
import accordionList from "./modules/faq.js";
import eliminarBotaoEventos from "./modules/buttao-sem-eventos.js";
import animaScroll from "./modules/scroll-sections.js";
import dataFuncionamento from "./modules/data.js";
import slide from "./modules/carrossel.js";
import cardapio from "./modules/cardapio.js";
import carrinho from "./modules/carrinho.js";
import pagamento from "./modules/pagamento.js";
import regexp_Pagamento from "./modules/regexp-pagamento.js";
import buttonFinalizarCompra from "./modules/button-pagamento.js";
import menuMobile from "./modules/menu-mobile.js";

const scrollLinkSuave = new ScrollLinkSuave('.menu ul a[href^="#"]');
scrollLinkSuave.init();

localLoja("aside", ".icon-deletar");
accordionList(".faq dl .pergunta");
eliminarBotaoEventos(
  ".contato-container form button",
  ".contato-container form input",
  ".contato-container form textarea",
);
animaScroll("main section");
dataFuncionamento(".js-horario p");
slide(".slide", ".slide-wrapper", "#btn-voltar", "#btn-avancar");
cardapio(".js-cardapio", ".menos", ".mais");
carrinho();
pagamento();
regexp_Pagamento();
buttonFinalizarCompra();
menuMobile();
