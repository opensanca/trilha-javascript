'use strict';

// Crie uma função de soma que seja invocada da
// seguinte maneira: soma(5)(10);

function soma(x) {
  return function(y) {
    return x + y;
  }
}

const somaBase = soma(5);

console.log(somaBase(10));
console.log(somaBase(20));
console.log(somaBase(30));
