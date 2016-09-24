'use strict';

let pessoa = {
  sexo: 'Masculino'
};

let renan = {
  nome: 'Renan'
};

Object.setPrototypeOf(renan, pessoa);

let jose = {
  nome: 'Jose'
}

Object.setPrototypeOf(jose, pessoa);

renan.sexo = 'Feminino';

console.log(renan);
console.log(jose);
