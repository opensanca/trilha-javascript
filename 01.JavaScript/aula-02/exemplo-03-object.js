'use strict';

let pessoa = {
  nome: 'Renan',
  sobrenome: 'Johannsen de Paula',
  idade: 24
};

for(let prop in pessoa) {
  console.log(prop, ':', pessoa[prop]);
}
