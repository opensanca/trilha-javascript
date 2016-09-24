'use strict';

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.falar = function() {
  console.log(`Eu sou ${this.nome} e tenho ${this.idade} anos!`);
}

var renan = new Pessoa('renan', 24);
renan.falar();
