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

  this.comparar = function(obj, criterio, prop) {
    return criterio(this, obj, prop);
  };
}

function comparaProp(obj1, obj2, prop) {
  return obj1[prop] >= obj2[prop];
}

const renan = new Pessoa('Renan', 24, 'renan@a.com');
const jose = new Pessoa('Jose', 30, 'jose@a.com');

const r = renan.comparar(jose, comparaProp, 'nome');
console.log(r);
