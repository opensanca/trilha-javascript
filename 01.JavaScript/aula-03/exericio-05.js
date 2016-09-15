'use strict';

// Crie um debugger configurável

function configuraDebug(label) {
  return function sendMessage(msg) {
    console.log(label, msg);
  }
}

const debugDoArquivo = configuraDebug('Arquivo');
const debugDaFuncao = configuraDebug('Funcao');

debugDoArquivo('teste');
debugDoArquivo('teste2');

debugDaFuncao('teste');
debugDaFuncao('teste2');
