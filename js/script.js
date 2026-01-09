import LocalLoja from "./modules/ativar-local-loja.js";
import ScrollLinkSuave from "./modules/scroll-link-suave.js";
import AccordionList from "./modules/faq.js";
import EliminarBotaoEventos from "./modules/buttao-sem-eventos.js";
import AnimaScroll from "./modules/scroll-sections.js";
import DataFuncionamento from "./modules/data.js";
import slide from "./modules/carrossel.js";
import cardapio from "./modules/cardapio.js";
import carrinho from "./modules/carrinho.js";
import pagamento from "./modules/pagamento.js";
import Regexp_Pagamento from "./modules/regexp-pagamento.js";
import ButtonFinalizarCompra from "./modules/button-pagamento.js";
import menuMobile from "./modules/menu-mobile.js";

const localLoja = new LocalLoja("aside", ".icon-deletar");
localLoja.init();

const scrollLinkSuave = new ScrollLinkSuave('.menu ul a[href^="#"]');
scrollLinkSuave.init();

const accordion = new AccordionList(".faq dl .pergunta");
accordion.init();

const botaoContato = new EliminarBotaoEventos( ".contato-container form button", ".contato-container form input",".contato-container form textarea");
botaoContato.init();

const animacaoScroll = new AnimaScroll('[data-scroll="suave"]');
animacaoScroll.init();

const funcionamento = new DataFuncionamento(".js-horario p");
funcionamento.init();

slide(".slide", ".slide-wrapper", "#btn-voltar", "#btn-avancar");

cardapio(".js-cardapio", ".menos", ".mais");

carrinho();

pagamento();

const regexpPagamento = new Regexp_Pagamento("#email", "#cpf", "#cep", "#nome, #sobrenome, #rua, #bairro, #cidade, #num, #complemento, #num-cartao, #codigo, #vencimento, #nome-cartao, #estado");
regexpPagamento.init();

const botaoCompra = new ButtonFinalizarCompra(".formulario-pagar button", '.formulario-pagar input[type="text"], .formulario-pagar input[type="email"]', ".selecione-container input", '.formulario-pagar input[type="checkbox"]');
botaoCompra.init();

menuMobile();
