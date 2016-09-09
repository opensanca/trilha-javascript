'use strict';

let pessoa = {
  nome: 'Renan',
  getNome: function() {
    return this.nome
  }
};

pessoa.getNome = function() {
  return this.nome;
};

console.log(pessoa.getNome());
