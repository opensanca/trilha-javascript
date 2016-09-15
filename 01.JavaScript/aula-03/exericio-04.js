'use strict';

// Crie uma função construtora de Pessoas
// Adicione os atributos de nome, idade e email
// Crie um método de comparação de Pessoas com uma
// condicional dinâmica que receba o nome da
// propriedade a ser comparada dos objetos

function Pessoa(nome, idade, email) {
  this.nome = nome;
  this.idade = idade;
  this.email = email;

  this.comparar = function(obj, criterio) {
    return criterio(this, obj);
  };
}

function preparaCriterio(prop) {
  return function(obj1, obj2) {
    return obj1[prop] >= obj2[prop];
  }
}

const comparacaoNome = preparaCriterio('nome');
const comparacaoIdade = preparaCriterio('idade');
const comparacaoEmail = preparaCriterio('email');

const renan = new Pessoa('Renan', 24, 'renan@a.com');
const jose = new Pessoa('Jose', 30, 'jose@a.com');

console.log(renan.comparar(jose, comparacaoNome));
console.log(renan.comparar(jose, comparacaoIdade));
console.log(renan.comparar(jose, comparacaoEmail));
