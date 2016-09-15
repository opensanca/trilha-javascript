'use strict';

// Crie uma função construtora de carros
// Adicione os atributos de nome, cor e ano de lançamento
// Crie um método de comparação de carros com
// condicional dinâmica

function Carro(nome, cor, ano) {
  this.nome = nome;
  this.cor = cor;
  this.ano = ano;

  this.comparar = function(obj, criterio) {
    return criterio(this, obj)
  }
}

const car1 = new Carro('Palio', 'vermelha', 2015);
const car2 = new Carro('Camaro', 'amarelo', 2014);

const result = car1.comparar(car2, function(x, y) {
  return x.ano >= y.ano;
});

console.log(result);
