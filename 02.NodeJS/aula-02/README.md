# HTTP e Rest;

Nesta aula abordamos HTTP e REST.

Abaixo, segue alguns links e material para apoio.

## Video Aulas

Rodrigo Branas:
- [Node.js - #6 - Core Modules - net](https://youtu.be/sx36tuCzUOE?list=PLQCmSnNFVYnTFo60Bt972f8HA4Td7WKwq)
- [Node.js - #7 - Core Modules - http - Parte 1](https://youtu.be/Pp3OCaOCeWk?list=PLQCmSnNFVYnTFo60Bt972f8HA4Td7WKwq)
- [Node.js - #8 - Core Modules - http - Parte 2](https://youtu.be/-TVny5Dxw-I?list=PLQCmSnNFVYnTFo60Bt972f8HA4Td7WKwq)

# Artigo de apoio

## HTTP

O protocolo HTTP (Hypertext Transfer Protocol) é um protocolo de comunicação entre cliente e servidor.

Basicamente ele funciona através de Requisições (Request) por parte dos clientes e Respostas (Response) por parte do servidor.

As requisições e suas respectivas respostas seguem os padrões definidos na [RFC2616](https://tools.ietf.org/html/rfc2616).

Mais especificamente as requisições possuem o seguinte padrão:

### Linha inicial (request line)

A linha inicial é composta de três partes, separadas por espaço, que especificam o método a ser executado, a identificação do recurso (URI) e a versão do protocolo utilizada.

Exemplo:

```http
POST http://www.minhaapi.com.br/v1/cliente HTTP/1.1
```

Basicamente o método detalha o processamento que será efetuado sobre um determinado recurso, a URI identifica o recurso alvo deste processamento e a versão do protocolo especifica a forma de computação da requisição.

### Cabeçalho (request header);

É responsável por transferir informações adicionais entre o cliente e o servidor. Uma estrutura chave-valor, opcional, especificada logo após a request line.

Exemplo:

```http
POST http://www.minhaapi.com.br/v1/cliente HTTP/1.1
Accept: application/json; charset=utf-8
Accept-Language: pt
Content-Type: application/json; charset=utf-8
```

O header basicamente detalha os metadados da requisição.

### Corpo da requisição (request body)

Alguns métodos do protocolo HTTP permitem o envio de dados para o servidor através do body da requisição.

É obrigatório a inserção de uma linha em branco entre o header e o body.

Exemplo:

```http
POST http://www.minhaapi.com.br/v1/cliente HTTP/1.1
Accept: application/json; charset=utf-8
Accept-Language: pt
Content-Type: application/json; charset=utf-8
Content-Length: 39

{ "nome" : "Renan Johannsen de Paula" }
```

### Métodos (request methods)

Os métodos de uma requisição indicam a ação a ser realizada sobre um determinado recurso.

Abaixo estão listados os oito métodos suportados pelo protocolo, bem como o seus respectivos objetivos:

#### OPTIONS

O método **OPTIONS** consulta os métodos suportados para um determinado recurso do servidor, ou seja, retorna a lista de operações aceitas sobre um determinado recurso.

Este método é muito útil pois pode ser utilizado e explorado pelos desenvolvedores na construção de robos e na documentação de APIs.

#### GET

O método **GET**, como o nome já diz, tem por objetivo a obtenção de um determinado recurso. Por exemplo, se realizarmos um GET sobre a URI **http://www.minhaapi.com.br/v1/clientes** espera-se que o servidor retorne a lista de clientes.

O método GET é considerado um método **"seguro"**, pois semanticamente esta operação serve apenas para consultas, ou seja, o recurso consultado não sofre alteração. Dado a esta característica o método GET não permite o envio de um body na requisição, pois nenhum dado será inserido ou alterado.

Sempre que entramos em um website pelo nosso navegador o mesmo efetua uma operação de GET para a obtenção do HTML a ser exibido.

#### HEAD

O método **HEAD** é uma variação do método GET onde o body da resposta não é retornada, ou seja, serve para a verificação dos cabeçalhos e do status code retornado pelo servidor. Pode ser utilizado para a validação de um determinado recurso, por exemplo, se um determinado cliente existe.

#### POST

O método **POST** serve para o processamento de uma determinada ação e dentre bem como a inclusão de novos registros.

Por exemplo, ao efetuarmos um POST sobre a URI **http://www.minhaapi.com.br/v1/cliente** um novo cliente será *"inserido"* na base de dados.

Este método não é considerado **"Seguro"** uma vez que o mesmo cria ou computa ações sobre recursos do servidor.

#### PUT

O método **PUT** tem por objetivo alterar um determinado recurso do servidor. Por exemplo, ao efetuar um PUT sobre a URI **http://www.minhaapi.com.br/v1/cliente/10** o cliente cujo ID 10, especificado na URL, será alterado mediante as informações passadas no body.

#### DELETE

O método **DELETE** tem por objetivo excluir um determinado recurso do servidor. Por exemplo, ao efetuar um DELETE sobre a URI **http://www.minhaapi.com.br/v1/cliente/10** o cliente cujo ID 10, especificado na URL, será excluído.


#### TRACE

Ecoa o pedido, de maneira que o cliente possa saber o que os servidores intermediários estão mudando em sua requisição.

#### CONNECT

Serve para uso com um proxy que possa se tornar um túnel SSL (um túnel pode ser usado, por exemplo, para criar uma conexão segura).

### Envio de parâmetros e informações

Existem diversas formas de enviarmos parâmetros e informações para o servidor. Abaixo entenderemos cada uma delas e sua utilização adequada.

#### URI

Podemos enviar parâmetros para o servidor na composição das URIs.

Por exemplo, identificar de um determinado recurso: **http://www.minhaapi.com.br/v1/cliente/10**.

#### Query String

Ao compormos nossa URL podemos passar parâmetros através de uma Query String. Por exemplo, podemos solicitar através de um GET todos os clientes cujo nome é "Renan" e idade de "24" anos: **http://www.minhaapi.com.br/v1/clientes?nome=Renan&idade=24**.

Reparem que a query começa a partir do **"?"** e que os parâmetros são especificados através de chave valor e separados por **"&"**.

Obs: O conceito fundamental em utilizar a URI e URL para passarmos parâmetros é a ideia de que, ao copiarmos a URL em outro navegador, ou enviarmos para um amigo, o mesmo recurso será recuperado.

#### Header

A ideia de se utilizar o header para passagem de parâmetros, é a de enviar metadados sobre a nossa requisição, bem como informações únicas como o token de autenticação.

Por exemplo, enviar o tipo de dado que aceito como resposta.

#### Body

Em alguns métodos o body não está disponível, entretanto o objetivo dele é enviar os dados a serem computados durante a requisição.

Por exemplo, ao realizarmos um PUT na URI **"http://www.minhaapi.com.br/v1/cliente/10"** o body deve conter as informações a serem alteradas no recurso.


### Response

Para cada requisição há uma resposta por parte do host (servidor). As respostas são parecidas com as requisições e possuem uma linha inicial (status-line), cabeçalho (response header) e um possível body.

A status line é composta pela versão do protocolo HTTP, um código de status (status-code) da resposta, e uma descrição do código do status (reason-phrase).

O **Status-Code** indica qual o resultado obtido após a computação da requisição. Os status são divididos em famílias e cada família possui uma semântica própria.

Dentre as famílias estão:

| Família | Resultado |
| ---------- | ------------- |
| 1xx | Informativo |
| 2xx | Sucesso |
| 3xx | Redirecionamento |
| 4xx | Erro de cliente |
| 5xx | Outros erros |

Exemplos:
- Se uma requisição retornar **200** como status code significa que tudo foi computado devidamente.
- Se uma requisição retornar **404** quer dizer que o recurso especificado pelo cliente não foi encontrado.
- Se uma requisição retornar **500** quer dizer que um erro inesperado aconteceu no servidor.

## REST

O REST (Transferência de Estado Representacional) é um conjunto de princípios arquiteturais que tem por objetivo a criação de APIs semânticas e padronizadas, aproveitando as funcionalidades disponíveis no protocolo HTTP.

Parece meio óbvio utilizar as funcionalidades disponíveis no protocolo entretanto a grande parte dos desenvolvedores não conhecem bem o suficiente o protocolo e acabam utilizando o mesmo de forma inadequada.

Exemplos clássicos do mau uso do protocolo:
- Métodos get que alteram o estado do servidor;
- Despadronização do aceso aos recursos;
- Utilização do POST para a execução de todos os tipos de operações;
- Utilização incorreta dos códigos de status;

O REST vem frisar os recursos disponíveis no protocolo HTTP e nos auxiliar com a especificação de um conjunto de princípios, listados abaixo, para a criação APIs padronizadas e semânticas.

### Princípios

- Manter a comunicação cliente-servidor livre de estado, ou seja, as requisições HTTP devem conter todos os insumos necessários para o processamento da mesma. Em outras palavras evite ao máximo a utilização de sessão.
- Utilização adequada dos métodos suportados pelo protocolo HTTP. Exemplo: dado um determinado recurso, como **http://www.minhaapi.com.br/v1/cliente/** implicitamente sabemos que se fizermos um post sobre ele, estaríamos realizando a inserção de um novo cliente passado no body; Se executarmos um GET em **http://www.minhaapi.com.br/v1/cliente/10** o resultado esperado é a obtenção do cliente cujo id é 10 e assim por diante.
- Padronização da identificação dos recursos, como **"/cliente"**, **"/usuário"** etc.
- Utilização de hipermídia para interligar as operações. Exemplo, ao inserirmos um cliente, retornar no corpo da mensagem um link para a consulta do cliente inserido, como por exemplo **http://www.minhaapi.com.br/v1/cliente/11** onde o id 11 foi gerado pela inserção do recurso.

## Conclusão

Existem diversas características sobre o protocolo HTTP e sobre o REST propriamente dito que não foram abordados neste artigo, entretanto com os conceitos abordados não temos mais desculpas para negligenciarmos nossas aplicações.

A seguir encontra-se uma lista de materiais relacionados e indicados para o estudo:

- [Especificação HTTP - RFC2616](https://tools.ietf.org/html/rfc2616);
- [Como eu expliquei REST para a minha mulher](https://distopico.wordpress.com/traducao-de-how-i-explained-rest-to-my-wife/);
