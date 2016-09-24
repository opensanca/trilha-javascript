'use strict';

// Construa uma definição de conta que possuia
// uma taxa default de 0.10.
// Toda conta terá um método para calculo do imposto.
// Este método realizará a multiplicação do
// valor pela taxa;

// Construa uma conta de agua com o valor de 150.00;
// Construa uma conta de luz com valor de 100.00 e
// taxa de 0.05;

var conta = {
  taxa: 0.10,
  calculaImposto: function() {
    return this.valor * this.taxa;
  }
}

var contaDeAgua = {
  valor: 150.00,
  __proto__: conta
}

console.log(contaDeAgua.calculaImposto());

var contaDeLux = Object.create(conta);
contaDeLux.valor = 100.00;
contaDeLux.taxa = 0.05;

console.log(contaDeLux.calculaImposto());
