'use strict';

// Altere o protótipo de Number para adicionar potencia
// e raiz quadrada;

Number.prototype.sqrt = function() {
  return Math.sqrt(this);
}

console.log(new Number(144.0).sqrt());
