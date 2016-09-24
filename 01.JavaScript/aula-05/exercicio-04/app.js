'use strict';
(function($) {

  var inputNome = $('#nome');
  var buttonAdicionar = $('#adicionar');
  var listaTarefas = $('.tarefas');

  buttonAdicionar.click(function() {
    var nome = inputNome.value();
    listaTarefas.append(`<li>${nome}</li>`);
  });

})($);
