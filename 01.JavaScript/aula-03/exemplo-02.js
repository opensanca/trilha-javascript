'use strict';

function soma(x, y) {
  let contexto = this;
  console.log('Contexto: ', contexto);

  return x + y;
}

const resultDireta = soma(10, 20);
const resultCall = soma.call(null, 10, 20);
const resultApply = soma.apply(null, [10, 20]);

console.log(resultDireta);
console.log(resultCall);
console.log(resultApply);
