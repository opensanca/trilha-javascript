'use strict';
// Crie uma função que adicione propriedades dinamicamente em um objeto.

const obj = {}

add(obj, 'nome', 'Renan JP');
add(obj, 'nome composto', 'teste');

function add(obj, nomeProp, valorProp) {
  obj[nomeProp] = valorProp;
}

console.log(obj);
