'use strict';

// Construa uma definição de Animal com o método de
// andar. Este método mostra com quantas pernas
// o animal está andando;

// Instancie três animais com quantidade de pernas
// diferentes e utilizando as 3 formas manipulação
// de protótipos aprendidas;

var animal = {
  andar: function functionName() {
    console.log(`Andando com ${this.pernas} pernas!`);
  }
}
/* __PROTO__ */
var cavalo = {
  pernas: 4,
  __proto__: animal
};
cavalo.andar();

/* PROTOTYPE_OF */
var peixe = {
  pernas: 0,
  andar: function() {
    console.log('Peixe não anda!');
  }
};
Object.setPrototypeOf(peixe, animal);
peixe.andar();

/* CREATE */
var kiko = Object.create(animal);
kiko.pernas = 2;
kiko.andar();
