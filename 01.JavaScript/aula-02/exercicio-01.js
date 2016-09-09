'use strict';
// Crie um objeto de operações contendo dois operandos.
// Em seus métodos adicione as operações matemáticas básicas
// com base em seus atributos.

const operacoes = {
  x: 10,
  y: 20,
  soma: function() {
    return this.x + this.y;
  },
  subtracao: subtracao
}

function subtracao() {
  return this.x - this.y;
}

operacoes.divisao = function() {
  return this.x / this.y;
}

var multiplicacao = function() {
  return this.x * this.y;
}

operacoes.multiplicacao = multiplicacao;

console.log(operacoes.soma());
console.log(operacoes.subtracao());
console.log(operacoes.divisao());
console.log(operacoes.multiplicacao());
