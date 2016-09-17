'use strict';

function Pessoa(nome) {
  this.nome = nome;
  this.valueOf = function() {
    return this.nome;
  }
}

var result = new Pessoa('Renan') == 'Renan';

console.log(result);
