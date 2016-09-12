# Strict Mode, Variáveis e Hoisting

Nesta aula abordamos os conceitos iniciais da linguagem junto de características de extrema importância.
Abaixo, segue estão alguns links e materiais para apoio.

## Artigos

We Love Dev:
- [Zero to Hero JavaScript - Variáveis](http://www.welovedev.com.br/post/zero-to-hero-javascript-variaveis)
- [Zero to Hero JavaScript - Hoisting](http://www.welovedev.com.br/post/zero-to-hero-javascript-hoisting)
- [Zero to Hero JavaScript - Strict mode](http://www.welovedev.com.br/post/zero-to-hero-javascript-strict-mode)
 
Cristofer Sousa:
- [Hello JavaScript aka ES6!](http://cristofersousa.github.io/javascript,/node/hello-javascript)

## Video Aulas

Rodrigo Branas:
- [Desvendando a linguagem JavaScript - #1 - Introdução](https://www.youtube.com/watch?v=093dIOCNeIc&index=1&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc)
- [Desvendando a linguagem JavaScript - #2 - Number](https://www.youtube.com/watch?v=-4Er-sZoxHM&index=2&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc)
- [Desvendando a linguagem JavaScript - #3 - String](https://www.youtube.com/watch?v=c3vaqf9x1PQ&index=3&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc)
- [Desvendando a linguagem JavaScript - #4 - Boolean](https://www.youtube.com/watch?v=oP2ProYre4k&index=4&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc)
- [Desvendando a linguagem JavaScript - #5 - undefined e null](https://www.youtube.com/watch?v=dhaLnhvOyFc&index=5&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc)

Aulas de Programação:
- [Dicas Javascript - Ep01: Hoisting](https://www.youtube.com/watch?v=JGpekHQ_9kY)
- [ECMAScript 2015 (ES6) - Aula 03: Let e Const](https://www.youtube.com/watch?v=noJ2G56b7rs)
- [ECMAScript 2015 (ES6) - Aula 04: Let e Const (Parte 2)](https://www.youtube.com/watch?v=ewbkvH3cGaw)

# Artigo de apoio:

### Introdução

JavaScript é uma linguagem case sensitive e fracamente tipada, ou seja, não é necessário especificar explicitamente o tipo de uma variável em sua declaração. Entretanto, um ponto importante que deve ser frisado é que JavaScript possue tipos que são definidos e convertidos durante da execução dos scripts.

### Declaração de variáveis
Para a declaração de variáveis é necessário utilizar as palavras chaves var, let ou const onde as mesmas delimitarão o escopo (que entenderemos adiante) e o comportamento da variável.

Exemplo:

> var organizacao = 'Opensanca';

> console.log(organizacao);

> /* Saída no terminal será: */

>  $ Opensanca

Se uma variável for declarada fora do modo estrito da linguagem sem a utilização de ***var, let ou const*** a mesma será disponibilizada no escopo global. Este é um comportamento que muitas vezes não é desejado, portanto é de suma importância conhecer e utilizar o modo estrito da linguagem. Para saber mais sobre recomendo a leitura do artigo Strict Mode disponível aqui no blog.

Vale ressaltar que let e const são funcionalidades adicionadas na ECMAScript 2015 (ES6) portanto é preciso ficar atento com a compatibilidade dos navegadores ou da versão do Nodejs utilizada em seu projeto.

Variáveis declaradas com const, como o próprio nome diz, possuem comportamento de constantes e devem ser inicializadas em sua declaração, pois, em casos de modo restrito, a exceção SyntaxError será lançada. Não confundam constantes com objetos imutáveis. Em artigos futuros abordaremos melhor a diferença entre ambos.

### Hoisting

Antes de entendermos os escopos e como as variáveis se comportam perante o seu contexto, é imprescindível a compreensão do comportamento de Hoisting.

Em resumo, todas as declarações, seja de variáveis ou funções, são processadas e elevadas para o topo do arquivo ou da função antes que qualquer código seja executado.

Observe os códigos abaixo.

Código "original" onde uma variável foi declarada e atribuído um valor qualquer a mesma dentro de um bloco:

```
{
    var organizacao = 'Opensanca | JavaScript Full Stack';
}

console.log(name);

 // $ Opensanca | JavaScript Full Stack

```

Devido ao comportamento de Hoisting a declaração é elevada ao topo do arquivo e a atribuição do valor é mantida dentro do bloco resultando em:

> var name;

``` 
{
    name = 'Trilha Opensanca Developer | Full Stack JavaScript';
}
 ```

> console.log(name);

> // $ Trilha Opensanca Developer | Full Stack JavaScript

Vale salientar que variáveis definidas com let ou const ***"não sofrem hoisting"***.

Caso possua dúvidas sobre este comportamento, fica aqui uma sugestão do artigo sobre Hoisting postado no blog ou este vídeo do canal Aulas de Programação.

*** Escopos: *** 
Existem 3 escopos em que as variáveis podem ser disponibilizadas:

*** Global: ***
Variáveis declaradas com var fora de funções compõe o escopo global e podem ser acessadas livremente. Exemplo:

```
{
    // Como não há função, a declaração dentro do bloco sofre
    // hoisting e a variável definida com var assume o escopo global
    var name = 'Trilha Opensanca Developer | Full Stack JavaScript';
}
```
> console.log(name);

> // $ Trilha Opensanca Developer | Full Stack JavaScript

### Local (Função)
Variáveis declaradas com var dentro de funções ficam disponíveis localmente dentro do escopo da função. Exemplo:

```
function scope() {
    var name = 'Trilha Opensanca Developer | Full Stack JavaScript';
    console.log(name);
    // $ Trilha Opensanca Developer | Full Stack JavaScript
}
 
scope();
 
console.log(name);
// $ ReferenceError: name is not defined

```
### Bloco
Variáveis declaradas com let e const possuem escopo de bloco, ou seja, são vigentes a partir do bloco em que foram declaradas. Exemplo:
```
{
    let name = 'Trilha Opensanca Developer | Full Stack JavaScript';
    console.log(name);
    // $ Trilha Opensanca Developer | Full Stack JavaScript
}
 
console.log(name);
// $ ReferenceError: name is not defined

```
A compreensão plena dos escopos é extremamente importante para evitar comportamentos inesperados e manter nosso código consistente.

### Convenções
Para a nomeação de variáveis existem algumas regras que devemos seguir. Há também algumas convenções que podemos adotar para compreendermos certos aspectos do nosso código só de olhar para o nome das variáveis. Dentre elas estão:

Variáveis devem começar com ***letra, _ ou $***.

- Utilização do padrão CamelCase. UpperCamelCase para funções construtoras.
- Utiliação do padrão lowerCamelCase para variáveis convencionais.
- Constantes declaradas com CAPITAL_CASING.
- Variáveis locais iniciadas com _.
- Variáveis iniciadas com $ reservadas a frameworks, como o AngularJS e jQuery.

É claro que dependendo do contexto e da equipe, podem ser adotadas novas convenções ou padrões, o importante é manter a uniformidade do projeto.

###### [Material adaptado Zero to Hero JavaScript by Renan Johannsen](http://www.welovedev.com.br/post/zero-to-hero-javascript-variaveis)
