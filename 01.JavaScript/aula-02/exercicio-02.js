'use strict';
// Crie um objeto de operações contendo um número de operandos dinâmico.
// Em seus métodos adicione as operações matemáticas básicas
// com base em seus atributos.

const operacoes = {
  x: 10,
  y: 20,
  a: 20,
  idade: 40,
  nome: 30
}

operacoes.soma = function() {
  let result = 0;

  for(let prop in this) {
    let valor = this[prop];
    if(typeof valor == 'number') {
      result += valor;
    }
  }

  return result;
};

console.log(operacoes.soma());
