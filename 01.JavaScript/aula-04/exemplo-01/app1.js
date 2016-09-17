(function(document, console) {
  'use strict';

  var inputNome = document.getElementById('nome');
  var sendButton = document.getElementById('send');

  sendButton.addEventListener('click', function eventClick() {
    sendMessage(inputNome.value);
  });

  function sendMessage(message) {
    console.log(message);
  }
})(document, console);
