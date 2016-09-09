'use strict';

let pessoa = {
  nome: 'Renan'
};

pessoa.getNome = getNome;

function getNome() {
  return this.nome;
}

console.log(pessoa.getNome());
console.log(getNome());
