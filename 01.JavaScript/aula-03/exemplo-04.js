'use strict';

function hipotenusa(cataAdj) {
  return function(catOps) {
    return Math.sqrt(Math.pow(cataAdj, 2) + Math.pow(catOps, 2));
  }
}

var baseDoCalcHipo = hipotenusa(3);

console.log(baseDoCalcHipo(4));
console.log(baseDoCalcHipo(5));
console.log(baseDoCalcHipo(7));
