'use strict';
(function(window, document) {

  function Elemento(elemento) {
    this.elemento = elemento;
  }

  Elemento.prototype.click = function(callback) {
    this.elemento.addEventListener('click', callback);
    return this;
  };

  Elemento.prototype.value = function() {
    return this.elemento.value;
  };

  Elemento.prototype.append = function(htmlValue) {
    this.elemento.innerHTML += htmlValue;
    return this;
  };

  function init(seletor) {
    var elemento = document.querySelector(seletor);
    return new Elemento(elemento);
  }

  window.$ = init;
})(window, document);
