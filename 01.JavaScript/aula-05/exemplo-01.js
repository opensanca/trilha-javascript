'use strict';

let pessoa = {
  sexo: 'Masculino'
};

let renan = {
  nome: 'Renan',
  __proto__: pessoa
};

console.log(renan);
console.log(renan.sexo);

console.log(renan.__proto__);
console.log(renan.__proto__.__proto__);
console.log(renan.__proto__.__proto__.__proto__);
