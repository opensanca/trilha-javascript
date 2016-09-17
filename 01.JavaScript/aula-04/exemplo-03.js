'use strict';

function funcao1() {
  console.log('funcao1');
  return true;
}

function funcao2() {
  console.log('funcao2');
  return true;
}

var result = funcao1() | funcao2();

console.log(result);
