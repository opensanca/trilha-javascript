# MongoDB

Nesta aula abordamos as principais características do MongoDB.
Abaixo, segue alguns links e material para apoio.

## Video Aulas

- [Introdução ao MongoDb em vídeo aulas](https://www.portalgsti.com.br/2016/09/introducao-ao-mongodb-em-video-aulas.html);
- [Mongo University](https://university.mongodb.com/);
- [Be MEAN: MongoDB](https://www.youtube.com/playlist?list=PL77JVjKTJT2gXHb9FEokJsPEcoOmyF1pY);

## Artigos de Apoio

Primeiramente vamos entender o são banco de dados não relacionais (famosos NoSql). Basicamente surgiram com o intuito de resolver problemas específicos que os bancos relacionais não conseguem resolver eficientemente devido a estratégia de orquestração dos dados.

Os bancos de dados não relacionais tem por objetivo:

- Escalabilidade;
- Adaptabilidade dos dados;
- Facilidade de operação;

Existem diversos tipos de bancos de dados não relacionais e dentre eles temos:

- Chave/Valor;
- Documento;
- Grafo;
- Coluna;
- Híbridos;

MongoDB é um banco de dados schemaless orientado a arquivos projetado para facilitar o desenvolvimento e escalar com eficiência. Basicamente ele concilia a distribuição entre funcionalidades e escalabilidade para maximizar o desempenho e fornecer uma interface de operação fácil e intuitiva.

A ilustração abaixo mostra a distribuição do mongo dentre os demais banco de dados.

![Features vs Scale](./feature-vs-scale.png)

## Documentos

O MongoDB utiliza o formato BSON para armazenamento dos documentos. Na pratica é uma forma de JSON binarizado com a adição de referencias de tipos. Veja mais sobre documentos [aqui](https://docs.mongodb.org/manual/core/document/).

Os documentos são agrupados por coleções. Fazendo uma analogia aos banco de dados relacionais os documentos seriam as tuplas e as coleções seriam as tabelas.

## Schemaless (livre de esquema)

Os dados no mongo são livres de schema, ou seja, não seguem uma definição prévia como as tabelas dos banco de dados sql. Na pratica em uma coleção de documentos podem haver documentos completamente distintos facilitando a adaptação do banco de dados a mudanças.

## Instalação

Para a realização da instalação clique [aqui](https://docs.mongodb.org/manual/installation/);

## Utilização

Para conseguirmos utilizar o MongoDB primeiramente precisamos iniciar o serviço em background e posteriormente conectar através da interface disponibilizada via shell.

```mongodb
  sudo service mongod start
```

```mongodb
  mongo

  > MongoDB shell version: 3.2.1
  > connecting to: test
  > Mongo-Hacker 0.0.9
  > Server has startup warnings:
  > 2016-01-29T20:06:49.198-0200 I CONTROL  [initandlisten]
  > 2016-01-29T20:06:49.198-0200 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/enabled is 'always'.
  > 2016-01-29T20:06:49.198-0200 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
  > 2016-01-29T20:06:49.198-0200 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/defrag is 'always'.
  > 2016-01-29T20:06:49.198-0200 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
  > 2016-01-29T20:06:49.198-0200 I CONTROL  [initandlisten]
  > Inspiron-5548(mongod-3.2.1) test>
```

Para facilitar a utilização do mongo pelo show podemos adicionao o [mongo-hacker](https://github.com/TylerBrock/mongo-hacker).

## Operações

As operações são realizadas sobre os arquivos das coleções de um determinado banco de dados. Para a seleção de um banco de dados utilizamos a palavra reservada **use**. Um banco de dados ou uma coleção são criados a partir da primeira operação sobre os mesmos.

Ao referenciarmos um banco de dados através do comando **use** o mesmo é atribuido a variável **db**.

Exemplo:

```mongodb
  use escola
  db
  > escola
```

Para exibir os bancos de dados e as coleções existentes utilizamos o comando **show**.

Exemplo:

```mongodb
  show dbs
```

```mongodb
  use escola
  show collections
```

### Materual

Para fins didáticos utilizaremos como material do curso o próprio [manual do mongo](https://docs.mongodb.org/manual/) uma vez que o mesmo é bem completo e didático.

## Saiba mais

A seguir encontra-se uma lista de materiais relacionados e indicados para o estudo:

- [Manual](https://docs.mongodb.org/manual/);
