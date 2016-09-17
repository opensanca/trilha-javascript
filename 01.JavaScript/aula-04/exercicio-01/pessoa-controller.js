(function PessoaController(document, console, Person) {
  'use strict';

  var inputName = document.getElementById('name');
  var buttonSave = document.getElementById('save');

  buttonSave.addEventListener('click', function() {
    var person = new Person(inputName.value);
    console.log(person);
  });

})(document, console, Person);
