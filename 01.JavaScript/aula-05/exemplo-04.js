'use strict';

''.__proto__.quebrarCSV = function() {
  return this.split(',');
}

var propriedades = 'nome,idade,sexo,cpf';

console.log(propriedades.quebrarCSV());
console.log('123,456'.quebrarCSV());
