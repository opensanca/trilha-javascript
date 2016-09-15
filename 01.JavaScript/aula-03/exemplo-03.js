'use strict';

function Pessoa(nome) {
  this.nome = nome;
}

var renan = new Pessoa('renan');
console.log(renan);

var jose = {};
Pessoa.call(jose, 'jose');
console.log(jose);
