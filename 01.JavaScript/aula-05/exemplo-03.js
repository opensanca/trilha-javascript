'use strict';

let pessoa = {
  sexo: 'Masculino'
};

let renan = Object.create(pessoa);

console.log(renan.sexo);
