const minify = require("@node-minify/core");
const gcc = require("@node-minify/google-closure-compiler");
const sqwish = require('@node-minify/sqwish');

minify({
  compressor: gcc,
  input: [
    "src/js/jogo-da-velha.js",
    "src/js/jogo-da-velha-maquina.js",
    "src/js/jogo-da-velha-tela.js",
  ],
  output: "dist/js/game.min.js",
}).then(function () {
  console.log("gcc min");
});

minify({
  compressor: sqwish,
  input: ["src/css/jogo-da-velha.css"],
  output: "dist/css/game.min.css",
  callback: function () {
    console.log("sqwish concat");
  },
});
