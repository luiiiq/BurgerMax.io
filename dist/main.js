/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/ativar-local-loja.js"
/*!*****************************************!*\
  !*** ./js/modules/ativar-local-loja.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalLoja)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar LocalLoja = /*#__PURE__*/function () {\n  function LocalLoja(aside, deletar) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, LocalLoja);\n    this.asideElemento = document.querySelector(aside);\n    this.deletarElemento = document.querySelector(deletar);\n    this.desativarElemento = this.desativarElemento.bind(this);\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(LocalLoja, [{\n    key: \"desativarElemento\",\n    value: function desativarElemento() {\n      this.asideElemento.classList.add(\"desativado\");\n    }\n  }, {\n    key: \"adicionarDesativarEvent\",\n    value: function adicionarDesativarEvent() {\n      this.deletarElemento.addEventListener(\"click\", this.desativarElemento);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.asideElemento && this.deletarElemento) {\n        this.adicionarDesativarEvent();\n      }\n      ;\n      return this;\n    }\n  }]);\n}();\n\n;\n\n//# sourceURL=webpack://burgermax/./js/modules/ativar-local-loja.js?\n}");

/***/ },

/***/ "./js/modules/buttao-sem-eventos.js"
/*!******************************************!*\
  !*** ./js/modules/buttao-sem-eventos.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EliminarBotaoEventos)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar EliminarBotaoEventos = /*#__PURE__*/function () {\n  function EliminarBotaoEventos(botaoMsg, inputsMsg, textarea) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, EliminarBotaoEventos);\n    this.botaoEnviarMsg = document.querySelector(botaoMsg);\n    this.listaInputsMsg = document.querySelectorAll(inputsMsg);\n    this.textareaElemento = document.querySelector(textarea);\n    this.desativarPadrao = this.desativarPadrao.bind(this);\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(EliminarBotaoEventos, [{\n    key: \"desativarPadrao\",\n    value: function desativarPadrao(event) {\n      var msgLimpa = this.textareaElemento.value.trim();\n      var todosPreenchidos = true;\n      this.listaInputsMsg.forEach(function (input) {\n        if (input.value.trim() === \"\") {\n          todosPreenchidos = false;\n        }\n      });\n      if (todosPreenchidos && msgLimpa !== \"\") {\n        event.preventDefault();\n        document.body.style.cursor = \"wait\";\n        setTimeout(function () {\n          window.alert(\"Sua mensagem foi enviada com sucesso!\");\n          window.location.href = \"./index.html\";\n        }, 2000);\n      }\n      ;\n    }\n  }, {\n    key: \"adicionarBotaoEvent\",\n    value: function adicionarBotaoEvent() {\n      this.botaoEnviarMsg.addEventListener(\"click\", this.desativarPadrao);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.botaoEnviarMsg && this.listaInputsMsg.length && this.textareaElemento) {\n        this.adicionarBotaoEvent();\n      }\n      ;\n      return this;\n    }\n  }]);\n}();\n\n;\n\n//# sourceURL=webpack://burgermax/./js/modules/buttao-sem-eventos.js?\n}");

/***/ },

/***/ "./js/modules/button-pagamento.js"
/*!****************************************!*\
  !*** ./js/modules/button-pagamento.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buttonFinalizarCompra)\n/* harmony export */ });\nfunction buttonFinalizarCompra() {\n  var button = document.querySelector(\".formulario-pagar button\");\n  var inputs = document.querySelectorAll('.formulario-pagar input[type=\"text\"], .formulario-pagar input[type=\"email\"]');\n  var radio = document.querySelectorAll(\".selecione-container input\");\n  var checkbox = document.querySelector('.formulario-pagar input[type=\"checkbox\"]');\n  var cesta = [];\n  try {\n    cesta = JSON.parse(localStorage.getItem(\"card-info\")) || [];\n  } catch (e) {\n    cesta = [];\n  }\n  if (button && inputs.length && radio.length && checkbox) {\n    var alterarPadrao = function alterarPadrao(event) {\n      var radioVerificar = radio[0].checked === true || radio[1].checked;\n      var checkboxVerificar = checkbox.checked;\n      var todosPreenchidos = true;\n      inputs.forEach(function (input) {\n        if (input.value.trim() === \"\") {\n          todosPreenchidos = false;\n        }\n      });\n      if (todosPreenchidos && radioVerificar && checkboxVerificar) {\n        event.preventDefault();\n        var spanErro = document.querySelector(\".parcelas .erro-parcelas\");\n        if (spanErro) {\n          spanErro.remove();\n        }\n        document.body.style.cursor = \"wait\";\n        setTimeout(function () {\n          window.alert(\"Sua Compra foi enviada com sucesso!.\");\n          window.location.href = \"../index.html\";\n        }, 2000);\n        cesta = [];\n        localStorage.removeItem(\"card-info\");\n      } else if (todosPreenchidos && checkboxVerificar && !radioVerificar) {\n        event.preventDefault();\n        var spanElemento = document.createElement(\"span\");\n        var parcelas = document.querySelector(\".parcelas\");\n        spanElemento.classList.add(\"erro-parcelas\");\n        spanElemento.innerText = \"Parcela n\\xE3o foi informada!\";\n        parcelas.appendChild(spanElemento);\n      }\n    };\n    button.addEventListener(\"click\", alterarPadrao);\n  }\n}\n\n//# sourceURL=webpack://burgermax/./js/modules/button-pagamento.js?\n}");

/***/ },

/***/ "./js/modules/cardapio.js"
/*!********************************!*\
  !*** ./js/modules/cardapio.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cardapio)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction cardapio(cardapioGrid, diminuir, aumentar) {\n  // ! Cards dos Itens\n  var compras = document.querySelector(cardapioGrid);\n  var cesta = [];\n  try {\n    cesta = JSON.parse(localStorage.getItem(\"card-info\")) || [];\n  } catch (e) {\n    cesta = [];\n  }\n  var carrinhoIcone = document.querySelector(\".js-contador\");\n  if (!carrinhoIcone) return;\n\n  // ! Funções de incrementar, decrementar, atualizar e calcular itens no carrinho\n  function calcular() {\n    carrinhoIcone.innerHTML = cesta.map(function (elemento) {\n      return elemento.item;\n    }).reduce(function (prev, prox) {\n      return prev + prox;\n    }, 0);\n  }\n  function atualizar(id) {\n    var contador = document.querySelectorAll(\".contador-wrapper span\");\n    var buscaPorId = cesta.find(function (idItem) {\n      return idItem.id === id;\n    });\n    contador.forEach(function (elemento) {\n      if (buscaPorId.id === elemento.id) elemento.innerHTML = buscaPorId.item;\n    });\n    calcular();\n  }\n  function incrementar(event) {\n    var elementoPai = event.currentTarget.parentElement.parentElement;\n    var idSelecionado = elementoPai.getAttribute(\"id\");\n    var buscaPeloItem = cesta.find(function (item) {\n      return item.id === idSelecionado;\n    });\n    if (buscaPeloItem === undefined) {\n      cesta.push({\n        id: idSelecionado,\n        item: 1\n      });\n    } else {\n      buscaPeloItem.item += 1;\n    }\n    atualizar(idSelecionado);\n    localStorage.setItem(\"card-info\", JSON.stringify(cesta));\n  }\n  function decrementar(event) {\n    var elementoPai = event.currentTarget.parentElement.parentElement;\n    var idSelecionado = elementoPai.getAttribute(\"id\");\n    var buscaPeloItem = cesta.find(function (item) {\n      return item.id === idSelecionado;\n    });\n    if (!buscaPeloItem) return;\n    if (buscaPeloItem.item === 0) return;else {\n      buscaPeloItem.item -= 1;\n    }\n    atualizar(idSelecionado);\n    cesta = cesta.filter(function (elemento) {\n      return elemento.item !== 0;\n    });\n    localStorage.setItem(\"card-info\", JSON.stringify(cesta));\n  }\n\n  // ! Gerar Cards dos Itens\n  if (compras) {\n    var gerarCompra = /*#__PURE__*/function () {\n      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var compraItensResposta, compraJSON, _t;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function (_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 1;\n              return fetch(\"../../info-cardapio-itens/cardapio-info.json\");\n            case 1:\n              compraItensResposta = _context.sent;\n              _context.next = 2;\n              return compraItensResposta.json();\n            case 2:\n              compraJSON = _context.sent;\n              compras.innerHTML = compraJSON.map(function (elemento) {\n                var id = elemento.id,\n                  nome = elemento.nome,\n                  preco = elemento.preco,\n                  img = elemento.img;\n                var buscaPorElemento = cesta.find(function (elemento) {\n                  return elemento.id === id;\n                }) || [];\n                return \"\\n                    <div class=\\\"opcao-item\\\" id=\\\"\".concat(id, \"\\\">\\n                        <div><img src=\\\"\").concat(img, \"\\\" alt=\\\"Imagem - \").concat(nome, \"\\\"></div>\\n                        <p>\").concat(nome, \"</p>\\n                        <p class=\\\"preco\\\">R$ \").concat(preco, \" </p>\\n                        <div class=\\\"contador-wrapper\\\">\\n                            <div class=\\\"menos\\\"><img src=\\\"../../img/remover.svg\\\" alt=\\\"Remover\\\"></div>\\n                            <span class=\\\"contador\\\" id=\\\"\").concat(id, \"\\\">\\n                            \").concat(buscaPorElemento.item === undefined ? 0 : buscaPorElemento.item, \"\\n                            </span>\\n                            <div class=\\\"mais\\\"><img src=\\\"../../img/adicionar.svg\\\" alt=\\\"Adicionar\\\"></div>\\n                        </div>\\n                    </div>\\n                \");\n              }).join(\"\");\n              calcular();\n              _context.next = 4;\n              break;\n            case 3:\n              _context.prev = 3;\n              _t = _context[\"catch\"](0);\n              console.log(_t);\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee, null, [[0, 3]]);\n      }));\n      return function gerarCompra() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n    gerarCompra().then(function () {\n      var btnDecrementar = document.querySelectorAll(diminuir);\n      var btnAumentar = document.querySelectorAll(aumentar);\n      btnDecrementar.forEach(function (diminuirElemento) {\n        diminuirElemento.addEventListener(\"click\", decrementar);\n      });\n      btnAumentar.forEach(function (aumentarElemento) {\n        aumentarElemento.addEventListener(\"click\", incrementar);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://burgermax/./js/modules/cardapio.js?\n}");

/***/ },

/***/ "./js/modules/carrinho.js"
/*!********************************!*\
  !*** ./js/modules/carrinho.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ carrinho)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction carrinho() {\n  var cesta = [];\n  try {\n    cesta = JSON.parse(localStorage.getItem(\"card-info\")) || [];\n  } catch (e) {\n    cesta = [];\n  }\n  var carrinhoPedido = document.querySelector(\"#js-pedido\");\n  var itensJSONGlobal = [];\n  if (carrinhoPedido) {\n    if (cesta.length !== 0) {\n      var calcular = function calcular() {\n        return cesta.map(function (elemento) {\n          return elemento.item;\n        }).reduce(function (prev, prox) {\n          return prev + prox;\n        }, 0);\n      };\n      var atualizar = function atualizar(id) {\n        var contador = document.querySelectorAll(\".contador\");\n        var buscaPorId = cesta.find(function (idItem) {\n          return idItem.id === id;\n        });\n        contador.forEach(function (elemento) {\n          if (buscaPorId.id === elemento.id) elemento.innerHTML = buscaPorId.item;\n        });\n        calcular();\n      }; // ! Atualizar o Total (preço * item) por Item no Carrinho\n      var atualizarTotalItem = function atualizarTotalItem(id) {\n        var buscaPorId = cesta.find(function (idItem) {\n          return idItem.id === id;\n        });\n        var buscaItem = itensJSONGlobal.find(function (info) {\n          return info.id === id;\n        });\n        if (buscaItem && buscaPorId) {\n          var valor = buscaItem.preco;\n          var numLimpo = valor.replace(\",\", \".\");\n          var numero = Number(numLimpo);\n          var numValido = numero * buscaPorId.item;\n          var totalSpan = document.querySelector(\"#\".concat(id, \" .total-item span\"));\n          if (totalSpan) {\n            var numHtml = numValido.toFixed(2).replace(\".\", \",\");\n            totalSpan.textContent = numHtml;\n          }\n        }\n      };\n      var incrementar = function incrementar(event) {\n        var elementoPai = event.currentTarget.parentElement.parentElement;\n        var idSelecionado = elementoPai.getAttribute(\"id\");\n        var buscaPeloItem = cesta.find(function (item) {\n          return item.id === idSelecionado;\n        });\n        if (buscaPeloItem === undefined) {\n          cesta.push({\n            id: idSelecionado,\n            item: 1\n          });\n        } else {\n          buscaPeloItem.item += 1;\n        }\n        atualizar(idSelecionado);\n        atualizarTotalItem(idSelecionado);\n        totalizarResumo();\n        subTotal();\n        precoTotal();\n        localStorage.setItem(\"card-info\", JSON.stringify(cesta));\n      };\n      var decrementar = function decrementar(event) {\n        var elementoPai = event.currentTarget.parentElement.parentElement;\n        var idSelecionado = elementoPai.getAttribute(\"id\");\n        var buscaPeloItem = cesta.find(function (item) {\n          return item.id === idSelecionado;\n        });\n        if (!buscaPeloItem) return;\n        if (buscaPeloItem.item === 0) {\n          return;\n        } else {\n          buscaPeloItem.item -= 1;\n          if (buscaPeloItem.item === 0) {\n            document.getElementById(idSelecionado).parentElement.parentElement.remove();\n          }\n        }\n        atualizar(idSelecionado);\n        atualizarTotalItem(idSelecionado);\n        totalizarResumo();\n        subTotal();\n        precoTotal();\n        cesta = cesta.filter(function (elemento) {\n          return elemento.item !== 0;\n        });\n        localStorage.setItem(\"card-info\", JSON.stringify(cesta));\n        if (cesta.length === 0) {\n          carrinhoPedido.innerHTML = \"\\n                        <div class=\\\"carrinho-grid\\\">\\n                            <div class=\\\"resumo-carrinho-vazio\\\">\\n                                <img src=\\\"../../img/carrinho-adicionar.svg\\\" alt=\\\"Icone - Adicionar ao Carrinho\\\">\\n                                <p>Seu Carrinho est\\xE1 vazio!</p>\\n                                <a href=\\\"./cardapio.html\\\">ADICIONE LANCHES</a>\\n                            </div>\\n\\n                            <div class=\\\"total-compra\\\">\\n                                <div class=\\\"compra-grid\\\">\\n                                    <h1 class=\\\"h1-titulo\\\">Seu Pedido</h1>\\n                                    <div class=\\\"itens\\\">\\n                                        <p>Item(s):</p>\\n                                        <span>0</span>\\n                                    </div>\\n                                    <div class=\\\"subtotal\\\">\\n                                        <p>Subtotal:</p>\\n                                        <span>0</span>\\n                                    </div>\\n                                    <div class=\\\"taxa\\\">\\n                                        <p>Taxa de Entrega:</p>\\n                                        <span>R$ 0</span>\\n                                    </div>\\n                                    <div class=\\\"total\\\">\\n                                        <p>Pre\\xE7o Total:</p>\\n                                        <span>R$ 0</span>\\n                                    </div>\\n                                </div>\\n                            </div>\\n                        </div>\\n                    \";\n        }\n      }; // ! Remover Item do Carrinho ao Clicar em \"REMOVER\"\n      var removerItem = function removerItem() {\n        var removerBtn = document.querySelectorAll(\".resumo-flex h5\");\n        removerBtn.forEach(function (btn) {\n          btn.addEventListener(\"click\", function () {\n            var id = btn.id;\n            cesta = cesta.filter(function (elemento) {\n              return elemento.id !== id;\n            });\n            localStorage.setItem(\"card-info\", JSON.stringify(cesta));\n            btn.parentElement.parentElement.remove();\n            totalizarResumo();\n            subTotal();\n            precoTotal();\n            if (cesta.length === 0) {\n              carrinhoPedido.innerHTML = \"\\n                            <div class=\\\"carrinho-grid\\\">\\n                                <div class=\\\"resumo-carrinho-vazio\\\">\\n                                    <img src=\\\"../../img/carrinho-adicionar.svg\\\" alt=\\\"Icone - Adicionar ao Carrinho\\\">\\n                                    <p>Seu Carrinho est\\xE1 vazio!</p>\\n                                    <a href=\\\"./cardapio.html\\\">ADICIONE LANCHES</a>\\n                                </div>\\n\\n                                <div class=\\\"total-compra\\\">\\n                                    <div class=\\\"compra-grid\\\">\\n                                        <h1 class=\\\"h1-titulo\\\">Seu Pedido</h1>\\n                                        <div class=\\\"itens\\\">\\n                                            <p>Item(s):</p>\\n                                            <span>0</span>\\n                                        </div>\\n                                        <div class=\\\"subtotal\\\">\\n                                            <p>Subtotal:</p>\\n                                            <span>0</span>\\n                                        </div>\\n                                        <div class=\\\"taxa\\\">\\n                                            <p>Taxa de Entrega:</p>\\n                                            <span>R$ 0</span>\\n                                        </div>\\n                                        <div class=\\\"total\\\">\\n                                            <p>Pre\\xE7o Total:</p>\\n                                            <span>R$ 0</span>\\n                                        </div>\\n                                    </div>\\n                                </div>\\n                            </div>\\n                            \";\n            }\n          });\n        });\n      };\n      var totalizarResumo = function totalizarResumo() {\n        totItens = 0;\n        cesta.forEach(function (elemento) {\n          totItens += elemento.item;\n        });\n        var itemSpan = document.querySelector(\".itens span\");\n        if (itemSpan) {\n          itemSpan.innerHTML = totItens;\n        }\n      };\n      var subTotal = function subTotal() {\n        totSub = 0;\n        var subTotal = document.querySelectorAll(\".resumo-flex h3 span\");\n        subTotal.forEach(function (span) {\n          var valorSub = Number(span.innerHTML.replace(\",\", \".\"));\n          totSub += valorSub;\n        });\n        var spanSubTotal = document.querySelector(\".subtotal span\");\n        if (spanSubTotal) {\n          spanSubTotal.innerHTML = \"R$ \".concat(totSub.toFixed(2).replace(\".\", \",\"));\n        }\n      };\n      var precoTotal = function precoTotal() {\n        subTotal();\n        var taxaValor = 10;\n        var taxa = document.querySelector(\".taxa span\");\n        taxa.innerHTML = \"R$ 10,00\";\n        var valorSub = totSub;\n        var precoTotal = document.querySelector(\".total span\");\n        if (precoTotal) {\n          precoTotal.innerHTML = \"R$ \".concat((valorSub + taxaValor).toFixed(2).replace(\".\", \",\"));\n        }\n      }; // ! Criar os Itens do Carrinho\n      var fetchItensPedido = /*#__PURE__*/function () {\n        var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n          var div, itensResposta, itensJSON, itensCarrinho, teste, _t;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function (_context) {\n            while (1) switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                div = document.createElement(\"div\");\n                div.classList.add(\"carrinho-grid\");\n                carrinhoPedido.appendChild(div);\n                _context.next = 1;\n                return fetch(\"../../info-cardapio-itens/cardapio-info.json\");\n              case 1:\n                itensResposta = _context.sent;\n                _context.next = 2;\n                return itensResposta.json();\n              case 2:\n                itensJSON = _context.sent;\n                itensJSONGlobal = itensJSON;\n                itensCarrinho = div.innerHTML = cesta.map(function (elemento) {\n                  var id = elemento.id,\n                    item = elemento.item;\n                  var busca = itensJSON.find(function (info) {\n                    return info.id === id;\n                  }) || [];\n                  var valor = busca.preco;\n                  var numLimpo = valor.replace(\",\", \".\");\n                  var numero = Number(numLimpo);\n                  var numValido = Number(numero.toFixed(2)) * item;\n                  return \"\\n                            <div class=\\\"resumo-carrinho-cheio\\\">\\n                                <div class=\\\"resumo-flex\\\">\\n                                    <div class=\\\"lanche\\\"><img src=\\\"\".concat(busca.img, \"\\\" alt=\\\"\").concat(busca.nome, \"\\\"></div>\\n                                    <div class=\\\"resumo-info\\\" id=\\\"\").concat(id, \"\\\">\\n                                        <p>\").concat(busca.nome, \"</p>\\n                                        <span>R$ \").concat(busca.preco, \"</span>\\n                                        <div class=\\\"contador-resumo\\\">\\n                                            <div class=\\\"menos\\\"><img src=\\\"../../img/remover.svg\\\" alt=\\\"Remover\\\"></div>\\n                                            <span class=\\\"contador\\\" id=\\\"\").concat(id, \"\\\">\").concat(item, \"</span>\\n                                            <div class=\\\"mais\\\"><img src=\\\"../../img/adicionar.svg\\\" alt=\\\"Adicionar\\\"></div>\\n                                        </div>\\n                                        <h3 class=\\\"total-item\\\">Total: R$<span> \").concat(numValido.toFixed(2).replace(\".\", \",\"), \"</span></h3>\\n                                    </div>\\n                                    <h5 id=\\\"\").concat(id, \"\\\">REMOVER</h5>\\n                                </div>\\n                            </div>\\n                            \");\n                }).join(\"\");\n                teste = \"              \\n                                <div class=\\\"total-compra\\\">\\n                                    <div class=\\\"compra-grid\\\">\\n                                        <h1 class=\\\"h1-titulo\\\">Seu Pedido</h1>\\n                                        <div class=\\\"itens\\\">\\n                                            <p>Item(s):</p>\\n                                            <span></span>\\n                                        </div>\\n                                        <div class=\\\"subtotal\\\">\\n                                            <p>Subtotal:</p>\\n                                            <span></span>\\n                                        </div>\\n                                        <div class=\\\"taxa\\\">\\n                                            <p>Taxa de Entrega:</p>\\n                                            <span></span>\\n                                        </div>\\n                                        <div class=\\\"total\\\">\\n                                            <p>Pre\\xE7o Total:</p>\\n                                            <span></span>\\n                                        </div>\\n                                        <div class=\\\"btn-pagamento\\\">\\n                                            <a href=\\\"./pagamento.html\\\">PAGAMENTO</a>\\n                                        </div>\\n                                    </div>\\n                                </div>\\n                            \";\n                div.innerHTML = itensCarrinho + teste;\n                _context.next = 4;\n                break;\n              case 3:\n                _context.prev = 3;\n                _t = _context[\"catch\"](0);\n                console.log(_t);\n              case 4:\n                calcular();\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }, _callee, null, [[0, 3]]);\n        }));\n        return function fetchItensPedido() {\n          return _ref.apply(this, arguments);\n        };\n      }();\n      var totItens = 0;\n      var totSub = 0;\n      fetchItensPedido().then(function () {\n        var btnDecrementar = document.querySelectorAll(\".menos\");\n        var btnAumentar = document.querySelectorAll(\".mais\");\n        btnDecrementar.forEach(function (diminuirElemento) {\n          diminuirElemento.addEventListener(\"click\", decrementar);\n        });\n        btnAumentar.forEach(function (aumentarElemento) {\n          aumentarElemento.addEventListener(\"click\", incrementar);\n        });\n        totalizarResumo();\n        subTotal();\n        precoTotal();\n        removerItem();\n      });\n    } else {\n      carrinhoPedido.innerHTML = \"\\n                <div class=\\\"carrinho-grid\\\">\\n                    <div class=\\\"resumo-carrinho-vazio\\\">\\n                        <img src=\\\"../../img/carrinho-adicionar.svg\\\" alt=\\\"Icone - Adicionar ao Carrinho\\\">\\n                        <p>Seu Carrinho est\\xE1 vazio!</p>\\n                        <a href=\\\"./cardapio.html\\\">ADICIONE LANCHES</a>\\n                    </div>\\n\\n                    <div class=\\\"total-compra\\\">\\n                        <div class=\\\"compra-grid\\\">\\n                            <h1 class=\\\"h1-titulo\\\">Seu Pedido</h1>\\n                            <div class=\\\"itens\\\">\\n                                <p>Item(s):</p>\\n                                <span>0</span>\\n                            </div>\\n                            <div class=\\\"subtotal\\\">\\n                                <p>Subtotal:</p>\\n                                <span>0</span>\\n                            </div>\\n                            <div class=\\\"taxa\\\">\\n                                <p>Taxa de Entrega:</p>\\n                                <span>R$ 0</span>\\n                            </div>\\n                            <div class=\\\"total\\\">\\n                                <p>Pre\\xE7o Total:</p>\\n                                <span>R$ 0</span>\\n                            </div>\\n                        </div>\\n                    </div>\\n                </div>\\n            \";\n    }\n  }\n}\n\n//# sourceURL=webpack://burgermax/./js/modules/carrinho.js?\n}");

/***/ },

/***/ "./js/modules/carrossel.js"
/*!*********************************!*\
  !*** ./js/modules/carrossel.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ slide)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\nfunction slide(slide, wrapper, prev, prox) {\n  var slideElemento = document.querySelector(slide);\n  var slideWrapper = document.querySelector(wrapper);\n  var slideArray = [];\n  var indexSlide = {\n    prev: 0,\n    atual: 0,\n    prox: 0\n  };\n  var btnPrev = document.querySelector(prev);\n  var btnProx = document.querySelector(prox);\n  if (slideElemento && slideWrapper && btnPrev && btnProx) {\n    var slidePosicao = function slidePosicao(slide) {\n      var margin = slideWrapper.offsetWidth - slideElemento.offsetWidth;\n      return -(slide.offsetLeft - margin - 20);\n    };\n    var slideConfig = function slideConfig() {\n      slideArray.length = 0;\n      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(slideElemento.children).map(function (elemento) {\n        slideArray.push({\n          posicao: slidePosicao(elemento),\n          elemento: elemento\n        });\n      });\n    };\n    var slideIndex = function slideIndex(index) {\n      var ultimoElemento = slideArray.length - 1;\n      indexSlide.prev = index ? index - 1 : undefined;\n      indexSlide.atual = index;\n      indexSlide.prox = index === ultimoElemento ? undefined : index + 1;\n    };\n    var moverSlide = function moverSlide(distanciaX) {\n      var limiteDireito = slideWrapper.offsetWidth - slideElemento.scrollWidth;\n      var limiteEsquerdo = 0;\n      var distanciaLimitada = Math.max(limiteDireito, Math.min(distanciaX, limiteEsquerdo));\n      slideElemento.style.transform = \"translate3d(\".concat(distanciaLimitada, \"px, 0, 0)\");\n    };\n    var mudarSlide = function mudarSlide(index) {\n      moverSlide(slideArray[index].posicao);\n      slideIndex(index);\n    };\n    var btnSlide = function btnSlide() {\n      btnPrev.addEventListener(\"click\", slideAnterior);\n      btnProx.addEventListener(\"click\", slidePosterior);\n    };\n    var slideAnterior = function slideAnterior() {\n      if (indexSlide.prev !== undefined) {\n        mudarSlide(indexSlide.prev);\n      }\n    };\n    var slidePosterior = function slidePosterior() {\n      if (indexSlide.prox !== undefined) {\n        mudarSlide(indexSlide.prox);\n      }\n    };\n    var transicao = function transicao(estado) {\n      slideElemento.style.transition = estado ? \"transform 0.3s\" : \"none\";\n    };\n    slideConfig();\n    mudarSlide(0);\n    btnSlide();\n    transicao(true);\n  }\n}\n\n//# sourceURL=webpack://burgermax/./js/modules/carrossel.js?\n}");

/***/ },

/***/ "./js/modules/data.js"
/*!****************************!*\
  !*** ./js/modules/data.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dataFuncionamento)\n/* harmony export */ });\nfunction dataFuncionamento(liFuncionamento) {\n  var liElemento = document.querySelector(liFuncionamento);\n  if (!liElemento) return;\n  var semanaAberta = liElemento.dataset.semana;\n  var horarioAberto = liElemento.dataset.horario;\n  if (semanaAberta && horarioAberto) {\n    var horarioAgora = function horarioAgora() {\n      var agora = new Date();\n      var horario = agora.getHours();\n      return horario;\n    };\n    var semanaAgora = function semanaAgora() {\n      var agora = new Date();\n      var semana = agora.getDay();\n      return semana;\n    };\n    var dataCompleta = function dataCompleta() {\n      var limparHorario = horarioAberto.split(\"-\").map(Number);\n      var limparSemana = semanaAberta.split(\",\").map(Number);\n      if (horarioAgora() >= limparHorario[0] && horarioAgora() <= limparHorario[limparHorario.length - 1] && limparSemana.includes(semanaAgora())) {\n        liElemento.classList.add(\"horario-aberto\");\n      }\n    };\n    dataCompleta();\n  }\n}\n\n//# sourceURL=webpack://burgermax/./js/modules/data.js?\n}");

/***/ },

/***/ "./js/modules/faq.js"
/*!***************************!*\
  !*** ./js/modules/faq.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AccordionList)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar AccordionList = /*#__PURE__*/function () {\n  function AccordionList(perguntas) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AccordionList);\n    this.perguntaLista = document.querySelectorAll(perguntas);\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AccordionList, [{\n    key: \"abilitarPergunta\",\n    value: function abilitarPergunta(pergunta) {\n      pergunta.classList.toggle(\"ativo\");\n    }\n  }, {\n    key: \"adicionarFaqEvent\",\n    value: function adicionarFaqEvent() {\n      var _this = this;\n      this.perguntaLista.forEach(function (pergunta) {\n        pergunta.addEventListener(\"click\", function () {\n          _this.abilitarPergunta(pergunta);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.perguntaLista.length) {\n        this.adicionarFaqEvent();\n      }\n      ;\n      return this;\n    }\n  }]);\n}();\n\n;\n\n//# sourceURL=webpack://burgermax/./js/modules/faq.js?\n}");

/***/ },

/***/ "./js/modules/menu-mobile.js"
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\nfunction menuMobile() {\n  var menuButton = document.querySelector('[data-menu=\"button\"]');\n  var menuLista = document.querySelector(\"#menu\");\n  var eventos = [\"click\", \"touchstart\"];\n  if (menuButton && menuLista) {\n    var abrirMenu = function abrirMenu(event) {\n      event.preventDefault();\n      menuLista.classList.toggle(\"ativo\");\n      clicarFora(menuLista, [\"click\", \"touchstart\"], function () {\n        menuLista.classList.remove(\"ativo\");\n      });\n    };\n    var clicarFora = function clicarFora(elemento, eventos, callback) {\n      var html = document.documentElement;\n      if (!elemento.hasAttribute(\"data-click\", \"\")) {\n        eventos.forEach(function (evento) {\n          setTimeout(function () {\n            html.addEventListener(evento, controlarClickFora);\n          });\n        });\n        elemento.setAttribute(\"data-click\", \"\");\n      }\n      function controlarClickFora(event) {\n        if (!elemento.contains(event.target) && event.target !== menuButton) {\n          elemento.removeAttribute(\"data-click\");\n          eventos.forEach(function (evento) {\n            html.removeEventListener(evento, controlarClickFora);\n          });\n          callback();\n        }\n      }\n    };\n    eventos.forEach(function (evento) {\n      menuButton.addEventListener(evento, abrirMenu);\n    });\n  }\n}\n\n//# sourceURL=webpack://burgermax/./js/modules/menu-mobile.js?\n}");

/***/ },

/***/ "./js/modules/pagamento.js"
/*!*********************************!*\
  !*** ./js/modules/pagamento.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pagamento)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction pagamento() {\n  var cesta = [];\n  try {\n    cesta = JSON.parse(localStorage.getItem(\"card-info\")) || [];\n  } catch (e) {\n    cesta = [];\n  }\n  var resumoPagamento = document.querySelector(\".resumo-pagamento\");\n  if (resumoPagamento) {\n    var subTotal = function subTotal() {\n      totSub = 0;\n      var subTotal = document.querySelectorAll(\".produto h3 span\");\n      subTotal.forEach(function (span) {\n        var valorSub = Number(span.innerHTML.replace(\",\", \".\"));\n        totSub += valorSub;\n      });\n      var resumoTitulo = document.querySelector(\".resumo-item h4:nth-of-type(1) span\");\n      var precoTotal = document.querySelector(\".resumo-item h4:nth-of-type(3) span\");\n      if (resumoTitulo && precoTotal) {\n        resumoTitulo.innerHTML = \"R$ \".concat(totSub.toFixed(2).replace(\".\", \",\"));\n        precoTotal.innerHTML = \"R$ \".concat((totSub + 10).toFixed(2).replace(\".\", \",\"));\n      }\n    };\n    var abrirParcelas = function abrirParcelas() {\n      totParcelas = 0;\n      var total = document.querySelectorAll(\".produto h3 span\");\n      total.forEach(function (span) {\n        var valor = Number(span.innerHTML.replace(\",\", \".\"));\n        totParcelas += valor;\n      });\n\n      // Parcelas Value\n      var parcelas_1 = document.querySelector(\".uma-vez input\");\n      var parcelas_2 = document.querySelector(\".duas-vezes input\");\n      parcelas_1.value = \"1x de R$ \".concat((totParcelas + 10).toFixed(2).replace(\".\", \",\"));\n      parcelas_2.value = \"2x de R$ \".concat(((totParcelas + 10) / 2).toFixed(2).replace(\".\", \",\"));\n\n      // Parcelas HTML\n      var parcela1Texto = document.querySelector(\".uma-vez label span\");\n      var parcela2Texto = document.querySelector(\".duas-vezes label span\");\n      if (parcela1Texto && parcela2Texto && parcelas_1 && parcelas_2) {\n        parcela1Texto.innerHTML = parcelas_1.value;\n        parcela2Texto.innerHTML = parcelas_2.value;\n      }\n      var seta = document.querySelector(\".selecione-container\");\n      var selecione = document.querySelector(\".selecione-container\");\n      if (seta && selecione) {\n        var abilitarParcelas = function abilitarParcelas() {\n          var umaVez = document.querySelector(\".uma-vez\");\n          var duasVezes = document.querySelector(\".duas-vezes\");\n          umaVez.classList.add(\"ativo\");\n          duasVezes.classList.add(\"ativo\");\n          var radioUmaVez = document.getElementById(\"1x\");\n          var radioDuasVezes = document.getElementById(\"2x\");\n          var selecionarParcelas = document.querySelector(\".selecione-container:nth-of-type(1) span\");\n          if (radioUmaVez.checked) {\n            selecionarParcelas.innerHTML = parcela1Texto.innerHTML;\n            selecionarParcelas.parentElement.classList.add(\"parcela-ativa\");\n          } else if (radioDuasVezes.checked) {\n            selecionarParcelas.innerHTML = parcela2Texto.innerHTML;\n            selecionarParcelas.parentElement.classList.add(\"parcela-ativa\");\n          }\n          function abrirConteudo() {\n            clicarForaConteudo(selecione, [\"click\", \"touchstart\"], function () {\n              umaVez.classList.remove(\"ativo\");\n              duasVezes.classList.remove(\"ativo\");\n            });\n          }\n          function clicarForaConteudo(elemento, eventos, callback) {\n            var html = document.documentElement;\n            if (!elemento.hasAttribute(\"data-fora\", \"\")) {\n              eventos.forEach(function (evento) {\n                setTimeout(function () {\n                  html.addEventListener(evento, controlarClick);\n                });\n              });\n              elemento.setAttribute(\"data-fora\", \"\");\n            }\n            function controlarClick(event) {\n              if (!elemento.contains(event.target)) {\n                elemento.removeAttribute(\"data-fora\");\n                eventos.forEach(function (evento) {\n                  html.removeEventListener(evento, controlarClick);\n                });\n                callback();\n              }\n            }\n          }\n          abrirConteudo();\n          selecione.addEventListener(\"click\", abrirConteudo);\n        };\n        seta.addEventListener(\"click\", abilitarParcelas);\n      }\n    };\n    var gerarResumo = /*#__PURE__*/function () {\n      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var div, respostaResumo, resumoJSON, divTitulo, valoresItem, itensResumo, _t;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function (_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              div = document.createElement(\"div\");\n              div.classList.add(\"resumo-item\");\n              resumoPagamento.appendChild(div);\n              _context.next = 1;\n              return fetch(\"../../info-cardapio-itens/cardapio-info.json\");\n            case 1:\n              respostaResumo = _context.sent;\n              _context.next = 2;\n              return respostaResumo.json();\n            case 2:\n              resumoJSON = _context.sent;\n              divTitulo = \"<h2>Resumo da Compra</h2>\";\n              valoresItem = \"\\n                        <h4>Subtotal:<span></span></h4>\\n                        <h4>Taxa de Entrega: R$ <span>10,00</span></h4>\\n                        <h4>Pre\\xE7o Total: R$ <span>1</span></h4>\\n                    \";\n              itensResumo = div.innerHTML = cesta.map(function (itemCesta) {\n                var id = itemCesta.id,\n                  item = itemCesta.item;\n                var busca = resumoJSON.find(function (item) {\n                  return item.id === id;\n                }) || [];\n                var precoValor = Number(busca.preco.replace(\",\", \".\"));\n                var totalValor = (precoValor * item).toFixed(2);\n                var valorCorrigido = totalValor.replace(\".\", \",\");\n                return \"\\n                        <div class=\\\"produto-container\\\">\\n                            <div class=\\\"produto\\\"><img src=\\\"\".concat(busca.img, \"\\\" alt=\\\"\").concat(busca.nome, \"\\\"></div>\\n                            <div class=\\\"produto\\\">\\n                                <p>\").concat(busca.nome, \"</p>\\n                                <span>R$ \").concat(busca.preco, \"</span>\\n                                <h3 class=\\\"total-item\\\">Total: R$<span> \").concat(valorCorrigido, \"</span></h3>\\n                            </div>\\n                            <h5><span id=\\\"unidades\\\"> \").concat(item, \" </span>unidades(s)</h5>\\n                        </div>\\n                    \");\n              }).join(\"\");\n              div.innerHTML = divTitulo + itensResumo + valoresItem;\n              _context.next = 4;\n              break;\n            case 3:\n              _context.prev = 3;\n              _t = _context[\"catch\"](0);\n              console.log(_t);\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee, null, [[0, 3]]);\n      }));\n      return function gerarResumo() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n    var totSub = 0;\n    var totParcelas = 0;\n    gerarResumo().then(function () {\n      subTotal();\n      abrirParcelas();\n    });\n  }\n}\n\n//# sourceURL=webpack://burgermax/./js/modules/pagamento.js?\n}");

/***/ },

/***/ "./js/modules/regexp-pagamento.js"
/*!****************************************!*\
  !*** ./js/modules/regexp-pagamento.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ regexp_Pagamento)\n/* harmony export */ });\nfunction regexp_Pagamento() {\n  var email = document.querySelector(\"#email\");\n  var cpf = document.querySelector(\"#cpf\");\n  var cep = document.querySelector(\"#cep\");\n  var inputs = document.querySelectorAll(\"#nome, #sobrenome, #rua, #bairro, #cidade, #num, #complemento, #num-cartao, #codigo, #vencimento, #nome-cartao, #estado\");\n  if (email && cpf && cep && inputs) {\n    // ! CEP\n    var formatarCep = function formatarCep() {\n      var cepLimpo = cep.value.replace(/\\D/g, \"\");\n      var cepConstruido = cepLimpo.replace(/(\\d{5})(\\d{3})/g, \"$1-$2\");\n      return cepConstruido;\n    };\n    var validarCep = function validarCep() {\n      var valor = cep.value;\n      var matchCep = valor.match(/\\d{5}[-\\s]?\\d{3}/);\n      if (matchCep && matchCep[0] === valor) {\n        cep.classList.remove(\"invalido\");\n        cep.nextElementSibling.classList.remove(\"ativar-erro\");\n        cep.classList.add(\"valido\");\n        cep.value = formatarCep(valor);\n      } else if (cep.value.trim() === \"\") {\n        cep.classList.remove(\"invalido\");\n        cep.classList.remove(\"valido\");\n        cep.nextElementSibling.classList.remove(\"ativar-erro\");\n      } else {\n        cep.classList.remove(\"valido\");\n        cep.classList.add(\"invalido\");\n        cep.nextElementSibling.classList.add(\"ativar-erro\");\n      }\n    }; // ! CPF\n    var formatarCpf = function formatarCpf() {\n      var cpfLimpo = cpf.value.replace(/\\D/g, \"\");\n      var cpfConstruido = cpfLimpo.replace(/(\\d{3})(\\d{3})(\\d{3})(\\d{2})/g, \"$1.$2.$3-$4\");\n      return cpfConstruido;\n    };\n    var validarCpf = function validarCpf() {\n      var valor = cpf.value;\n      var matchCpf = valor.match(/(?:\\d{3}[-.\\s]?){3}\\d{2}/g);\n      if (matchCpf && matchCpf[0] === valor) {\n        cpf.classList.remove(\"invalido\");\n        cpf.nextElementSibling.classList.remove(\"ativar-erro\");\n        cpf.classList.add(\"valido\");\n        cpf.value = formatarCpf(valor);\n      } else if (cpf.value.trim() === \"\") {\n        cpf.classList.remove(\"invalido\");\n        cpf.classList.remove(\"valido\");\n        cpf.nextElementSibling.classList.remove(\"ativar-erro\");\n      } else {\n        cpf.classList.remove(\"valido\");\n        cpf.classList.add(\"invalido\");\n        cpf.nextElementSibling.classList.add(\"ativar-erro\");\n      }\n    }; // ! Email\n    var validarEmail = function validarEmail() {\n      var valorEmail = email.value;\n      var matchEmail = valorEmail.match(/[\\w.-]+@[\\w-]+\\.[\\w-.]+/gi);\n      if (matchEmail) {\n        email.classList.remove(\"invalido\");\n        email.nextElementSibling.classList.remove(\"ativar-erro\");\n        email.classList.add(\"valido\");\n      } else if (email.value.trim() === \"\") {\n        email.classList.remove(\"invalido\");\n        email.classList.remove(\"valido\");\n        email.nextElementSibling.classList.remove(\"ativar-erro\");\n      } else {\n        email.classList.remove(\"valido\");\n        email.classList.add(\"invalido\");\n        email.nextElementSibling.classList.add(\"ativar-erro\");\n      }\n    }; // ! Span do Erro\n    var adicionarSpanAoErro = function adicionarSpanAoErro() {\n      var spanElemento = document.createElement(\"span\");\n      spanElemento.classList.add(\"erro-validacao\");\n      spanElemento.innerText = \"Email Inv\\xE1lido!\";\n      email.parentElement.insertBefore(spanElemento, email.nextElementSibling);\n      var spanCpf = document.createElement(\"span\");\n      spanCpf.classList.add(\"erro-validacao\");\n      spanCpf.innerText = \"CPF Inv\\xE1lido!\";\n      cpf.parentElement.insertBefore(spanCpf, cpf.nextElementSibling);\n      var spanCep = document.createElement(\"span\");\n      spanCep.classList.add(\"erro-validacao\");\n      spanCep.innerText = \"CEP Inv\\xE1lido!\";\n      cep.parentElement.insertBefore(spanCep, cep.nextElementSibling);\n    };\n    var adicionarEvento = function adicionarEvento() {\n      email.addEventListener(\"change\", validarEmail);\n      cpf.addEventListener(\"change\", validarCpf);\n      cep.addEventListener(\"change\", validarCep);\n      inputs.forEach(function (input) {\n        input.addEventListener(\"change\", function () {\n          input.classList.add(\"validar-input\");\n        });\n      });\n    };\n    adicionarEvento();\n    adicionarSpanAoErro();\n  }\n}\n\n//# sourceURL=webpack://burgermax/./js/modules/regexp-pagamento.js?\n}");

/***/ },

/***/ "./js/modules/scroll-link-suave.js"
/*!*****************************************!*\
  !*** ./js/modules/scroll-link-suave.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollLinkSuave)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar ScrollLinkSuave = /*#__PURE__*/function () {\n  function ScrollLinkSuave(links, opcoes) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ScrollLinkSuave);\n    this.linksLista = document.querySelectorAll(links);\n    if (opcoes === undefined) {\n      this.opcoes = {\n        behavior: \"smooth\",\n        block: \"start\"\n      };\n    } else {\n      this.opcoes = opcoes;\n    }\n    ;\n    this.linkSuave = this.linkSuave.bind(this);\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ScrollLinkSuave, [{\n    key: \"linkSuave\",\n    value: function linkSuave(event) {\n      event.preventDefault();\n      var href = event.currentTarget.getAttribute(\"href\");\n      var section = document.querySelector(href);\n      section.scrollIntoView(this.opcoes);\n    }\n  }, {\n    key: \"adicionarLinkEvent\",\n    value: function adicionarLinkEvent() {\n      var _this = this;\n      this.linksLista.forEach(function (link) {\n        link.addEventListener(\"click\", function (event) {\n          _this.linkSuave(event);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.linksLista.length) {\n        this.adicionarLinkEvent();\n      }\n      ;\n      return this;\n    }\n  }]);\n}();\n\n;\n\n//# sourceURL=webpack://burgermax/./js/modules/scroll-link-suave.js?\n}");

/***/ },

/***/ "./js/modules/scroll-sections.js"
/*!***************************************!*\
  !*** ./js/modules/scroll-sections.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animaScroll)\n/* harmony export */ });\nfunction animaScroll(sections) {\n  var sectionsLista = document.querySelectorAll(sections);\n  if (sectionsLista.length) {\n    var animaSecao = function animaSecao() {\n      sectionsLista.forEach(function (section) {\n        var windowMetade = window.innerHeight * 0.6;\n        var sectionTopo = section.getBoundingClientRect().top;\n        var sectionVisivel = sectionTopo - windowMetade;\n        if (sectionVisivel < 0) {\n          section.classList.add(\"ativar-scroll\");\n        }\n      });\n    };\n    animaSecao();\n    window.addEventListener(\"scroll\", animaSecao);\n  }\n}\n\n//# sourceURL=webpack://burgermax/./js/modules/scroll-sections.js?\n}");

/***/ },

/***/ "./js/script.js"
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ativar_local_loja_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ativar-local-loja.js */ \"./js/modules/ativar-local-loja.js\");\n/* harmony import */ var _modules_scroll_link_suave_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-link-suave.js */ \"./js/modules/scroll-link-suave.js\");\n/* harmony import */ var _modules_faq_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/faq.js */ \"./js/modules/faq.js\");\n/* harmony import */ var _modules_buttao_sem_eventos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/buttao-sem-eventos.js */ \"./js/modules/buttao-sem-eventos.js\");\n/* harmony import */ var _modules_scroll_sections_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll-sections.js */ \"./js/modules/scroll-sections.js\");\n/* harmony import */ var _modules_data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/data.js */ \"./js/modules/data.js\");\n/* harmony import */ var _modules_carrossel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/carrossel.js */ \"./js/modules/carrossel.js\");\n/* harmony import */ var _modules_cardapio_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/cardapio.js */ \"./js/modules/cardapio.js\");\n/* harmony import */ var _modules_carrinho_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/carrinho.js */ \"./js/modules/carrinho.js\");\n/* harmony import */ var _modules_pagamento_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/pagamento.js */ \"./js/modules/pagamento.js\");\n/* harmony import */ var _modules_regexp_pagamento_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/regexp-pagamento.js */ \"./js/modules/regexp-pagamento.js\");\n/* harmony import */ var _modules_button_pagamento_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/button-pagamento.js */ \"./js/modules/button-pagamento.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar localLoja = new _modules_ativar_local_loja_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"aside\", \".icon-deletar\");\nlocalLoja.init();\nvar scrollLinkSuave = new _modules_scroll_link_suave_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('.menu ul a[href^=\"#\"]');\nscrollLinkSuave.init();\nvar accordion = new _modules_faq_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\".faq dl .pergunta\");\naccordion.init();\nvar botaoContato = new _modules_buttao_sem_eventos_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\".contato-container form button\", \".contato-container form input\", \".contato-container form textarea\");\nbotaoContato.init();\n(0,_modules_scroll_sections_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"main section\");\n(0,_modules_data_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\".js-horario p\");\n(0,_modules_carrossel_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\".slide\", \".slide-wrapper\", \"#btn-voltar\", \"#btn-avancar\");\n(0,_modules_cardapio_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\".js-cardapio\", \".menos\", \".mais\");\n(0,_modules_carrinho_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_pagamento_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_regexp_pagamento_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n(0,_modules_button_pagamento_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\n\n//# sourceURL=webpack://burgermax/./js/script.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/OverloadYield.js"
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/OverloadYield.js ***!
  \**************************************************************/
(module) {

eval("{function _OverloadYield(e, d) {\n  this.v = e, this.k = d;\n}\nmodule.exports = _OverloadYield, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/OverloadYield.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js"
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(r, a) {\n  (null == a || a > r.length) && (a = r.length);\n  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];\n  return n;\n}\n\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(r) {\n  if (Array.isArray(r)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(r);\n}\n\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) {\n  try {\n    var i = n[a](c),\n      u = i.value;\n  } catch (n) {\n    return void e(n);\n  }\n  i.done ? t(u) : Promise.resolve(u).then(r, o);\n}\nfunction _asyncToGenerator(n) {\n  return function () {\n    var t = this,\n      e = arguments;\n    return new Promise(function (r, o) {\n      var a = n.apply(t, e);\n      function _next(n) {\n        asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n);\n      }\n      function _throw(n) {\n        asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n);\n      }\n      _next(void 0);\n    });\n  };\n}\n\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(a, n) {\n  if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\");\n}\n\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(e, r) {\n  for (var t = 0; t < r.length; t++) {\n    var o = r[t];\n    o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o.key), o);\n  }\n}\nfunction _createClass(e, r, t) {\n  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", {\n    writable: !1\n  }), e;\n}\n\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/esm/createClass.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js"
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(r) {\n  if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r);\n}\n\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(r) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(r) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js"
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction toPrimitive(t, r) {\n  if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t) || !t) return t;\n  var e = t[Symbol.toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i)) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\n\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction toPropertyKey(t) {\n  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t, \"string\");\n  return \"symbol\" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i) ? i : i + \"\";\n}\n\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js"
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/esm/typeof.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(r, a) {\n  if (r) {\n    if (\"string\" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(r, a);\n    var t = {}.toString.call(r).slice(8, -1);\n    return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(r, a) : void 0;\n  }\n}\n\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regenerator.js"
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regenerator.js ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var regeneratorDefine = __webpack_require__(/*! ./regeneratorDefine.js */ \"./node_modules/@babel/runtime/helpers/regeneratorDefine.js\");\nfunction _regenerator() {\n  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */\n  var e,\n    t,\n    r = \"function\" == typeof Symbol ? Symbol : {},\n    n = r.iterator || \"@@iterator\",\n    o = r.toStringTag || \"@@toStringTag\";\n  function i(r, n, o, i) {\n    var c = n && n.prototype instanceof Generator ? n : Generator,\n      u = Object.create(c.prototype);\n    return regeneratorDefine(u, \"_invoke\", function (r, n, o) {\n      var i,\n        c,\n        u,\n        f = 0,\n        p = o || [],\n        y = !1,\n        G = {\n          p: 0,\n          n: 0,\n          v: e,\n          a: d,\n          f: d.bind(e, 4),\n          d: function d(t, r) {\n            return i = t, c = 0, u = e, G.n = r, a;\n          }\n        };\n      function d(r, n) {\n        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {\n          var o,\n            i = p[t],\n            d = G.p,\n            l = i[2];\n          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));\n        }\n        if (o || r > 1) return a;\n        throw y = !0, n;\n      }\n      return function (o, p, l) {\n        if (f > 1) throw TypeError(\"Generator is already running\");\n        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {\n          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);\n          try {\n            if (f = 2, i) {\n              if (c || (o = \"next\"), t = i[o]) {\n                if (!(t = t.call(i, u))) throw TypeError(\"iterator result is not an object\");\n                if (!t.done) return t;\n                u = t.value, c < 2 && (c = 0);\n              } else 1 === c && (t = i[\"return\"]) && t.call(i), c < 2 && (u = TypeError(\"The iterator does not provide a '\" + o + \"' method\"), c = 1);\n              i = e;\n            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;\n          } catch (t) {\n            i = e, c = 1, u = t;\n          } finally {\n            f = 1;\n          }\n        }\n        return {\n          value: t,\n          done: y\n        };\n      };\n    }(r, o, i), !0), u;\n  }\n  var a = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  t = Object.getPrototypeOf;\n  var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function () {\n      return this;\n    }), t),\n    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);\n  function f(e) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, \"GeneratorFunction\")), e.prototype = Object.create(u), e;\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, \"constructor\", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = \"GeneratorFunction\", regeneratorDefine(GeneratorFunctionPrototype, o, \"GeneratorFunction\"), regeneratorDefine(u), regeneratorDefine(u, o, \"Generator\"), regeneratorDefine(u, n, function () {\n    return this;\n  }), regeneratorDefine(u, \"toString\", function () {\n    return \"[object Generator]\";\n  }), (module.exports = _regenerator = function _regenerator() {\n    return {\n      w: i,\n      m: f\n    };\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports)();\n}\nmodule.exports = _regenerator, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/regenerator.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsync.js"
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsync.js ***!
  \*****************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var regeneratorAsyncGen = __webpack_require__(/*! ./regeneratorAsyncGen.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js\");\nfunction _regeneratorAsync(n, e, r, t, o) {\n  var a = regeneratorAsyncGen(n, e, r, t, o);\n  return a.next().then(function (n) {\n    return n.done ? n.value : a.next();\n  });\n}\nmodule.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/regeneratorAsync.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js"
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js ***!
  \********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var regenerator = __webpack_require__(/*! ./regenerator.js */ \"./node_modules/@babel/runtime/helpers/regenerator.js\");\nvar regeneratorAsyncIterator = __webpack_require__(/*! ./regeneratorAsyncIterator.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js\");\nfunction _regeneratorAsyncGen(r, e, t, o, n) {\n  return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);\n}\nmodule.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js ***!
  \*************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var OverloadYield = __webpack_require__(/*! ./OverloadYield.js */ \"./node_modules/@babel/runtime/helpers/OverloadYield.js\");\nvar regeneratorDefine = __webpack_require__(/*! ./regeneratorDefine.js */ \"./node_modules/@babel/runtime/helpers/regeneratorDefine.js\");\nfunction AsyncIterator(t, e) {\n  function n(r, o, i, f) {\n    try {\n      var c = t[r](o),\n        u = c.value;\n      return u instanceof OverloadYield ? e.resolve(u.v).then(function (t) {\n        n(\"next\", t, i, f);\n      }, function (t) {\n        n(\"throw\", t, i, f);\n      }) : e.resolve(u).then(function (t) {\n        c.value = t, i(c);\n      }, function (t) {\n        return n(\"throw\", t, i, f);\n      });\n    } catch (t) {\n      f(t);\n    }\n  }\n  var r;\n  this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, \"function\" == typeof Symbol && Symbol.asyncIterator || \"@asyncIterator\", function () {\n    return this;\n  })), regeneratorDefine(this, \"_invoke\", function (t, o, i) {\n    function f() {\n      return new e(function (e, r) {\n        n(t, i, e, r);\n      });\n    }\n    return r = r ? r.then(f, f) : f();\n  }, !0);\n}\nmodule.exports = AsyncIterator, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorDefine.js"
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorDefine.js ***!
  \******************************************************************/
(module) {

eval("{function _regeneratorDefine(e, r, n, t) {\n  var i = Object.defineProperty;\n  try {\n    i({}, \"\", {});\n  } catch (e) {\n    i = 0;\n  }\n  module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {\n    function o(r, n) {\n      _regeneratorDefine(e, r, function (e) {\n        return this._invoke(r, n, e);\n      });\n    }\n    r ? i ? i(e, r, {\n      value: n,\n      enumerable: !t,\n      configurable: !t,\n      writable: !t\n    }) : e[r] = n : (o(\"next\", 0), o(\"throw\", 1), o(\"return\", 2));\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports, _regeneratorDefine(e, r, n, t);\n}\nmodule.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/regeneratorDefine.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorKeys.js"
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorKeys.js ***!
  \****************************************************************/
(module) {

eval("{function _regeneratorKeys(e) {\n  var n = Object(e),\n    r = [];\n  for (var t in n) r.unshift(t);\n  return function e() {\n    for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;\n    return e.done = !0, e;\n  };\n}\nmodule.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/regeneratorKeys.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var OverloadYield = __webpack_require__(/*! ./OverloadYield.js */ \"./node_modules/@babel/runtime/helpers/OverloadYield.js\");\nvar regenerator = __webpack_require__(/*! ./regenerator.js */ \"./node_modules/@babel/runtime/helpers/regenerator.js\");\nvar regeneratorAsync = __webpack_require__(/*! ./regeneratorAsync.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsync.js\");\nvar regeneratorAsyncGen = __webpack_require__(/*! ./regeneratorAsyncGen.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js\");\nvar regeneratorAsyncIterator = __webpack_require__(/*! ./regeneratorAsyncIterator.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js\");\nvar regeneratorKeys = __webpack_require__(/*! ./regeneratorKeys.js */ \"./node_modules/@babel/runtime/helpers/regeneratorKeys.js\");\nvar regeneratorValues = __webpack_require__(/*! ./regeneratorValues.js */ \"./node_modules/@babel/runtime/helpers/regeneratorValues.js\");\nfunction _regeneratorRuntime() {\n  \"use strict\";\n\n  var r = regenerator(),\n    e = r.m(_regeneratorRuntime),\n    t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;\n  function n(r) {\n    var e = \"function\" == typeof r && r.constructor;\n    return !!e && (e === t || \"GeneratorFunction\" === (e.displayName || e.name));\n  }\n  var o = {\n    \"throw\": 1,\n    \"return\": 2,\n    \"break\": 3,\n    \"continue\": 3\n  };\n  function a(r) {\n    var e, t;\n    return function (n) {\n      e || (e = {\n        stop: function stop() {\n          return t(n.a, 2);\n        },\n        \"catch\": function _catch() {\n          return n.v;\n        },\n        abrupt: function abrupt(r, e) {\n          return t(n.a, o[r], e);\n        },\n        delegateYield: function delegateYield(r, o, a) {\n          return e.resultName = o, t(n.d, regeneratorValues(r), a);\n        },\n        finish: function finish(r) {\n          return t(n.f, r);\n        }\n      }, t = function t(r, _t, o) {\n        n.p = e.prev, n.n = e.next;\n        try {\n          return r(_t, o);\n        } finally {\n          e.next = n.n;\n        }\n      }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;\n      try {\n        return r.call(this, e);\n      } finally {\n        n.p = e.prev, n.n = e.next;\n      }\n    };\n  }\n  return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return {\n      wrap: function wrap(e, t, n, o) {\n        return r.w(a(e), t, n, o && o.reverse());\n      },\n      isGeneratorFunction: n,\n      mark: r.m,\n      awrap: function awrap(r, e) {\n        return new OverloadYield(r, e);\n      },\n      AsyncIterator: regeneratorAsyncIterator,\n      async: function async(r, e, t, o, u) {\n        return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);\n      },\n      keys: regeneratorKeys,\n      values: regeneratorValues\n    };\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports)();\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorValues.js"
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorValues.js ***!
  \******************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorValues(e) {\n  if (null != e) {\n    var t = e[\"function\" == typeof Symbol && Symbol.iterator || \"@@iterator\"],\n      r = 0;\n    if (t) return t.call(e);\n    if (\"function\" == typeof e.next) return e;\n    if (!isNaN(e.length)) return {\n      next: function next() {\n        return e && r >= e.length && (e = void 0), {\n          value: e && e[r++],\n          done: !e\n        };\n      }\n    };\n  }\n  throw new TypeError(_typeof(e) + \" is not iterable\");\n}\nmodule.exports = _regeneratorValues, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/regeneratorValues.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/typeof.js"
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
(module) {

eval("{function _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports, _typeof(o);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/helpers/typeof.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/regenerator/index.js"
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://burgermax/./node_modules/@babel/runtime/regenerator/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;