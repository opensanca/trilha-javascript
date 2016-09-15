'use strict';

function criterio(x, y) {
  return x.nome >= y.nome;
}

function comparacao(obj1, obj2, criterio) {
  return criterio(obj1, obj2);
}

var renan = {nome: 'renan'};
var jose = {nome: 'jose'};

var r = comparacao(renan, jose, criterio);

console.log(r);
