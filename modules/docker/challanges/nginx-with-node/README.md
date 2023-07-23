# Docker - Desafio Nginx com Node.js

## Desafio 🧐
```
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.
```

## Requisitos 📃
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Docker](https://docs.docker.com/engine/install/)

## Como executar 🚀

Clone o repositório:
```
git clone git@github.com:tsuyoda/fc-challenges.git
```

Navegue até a pasta do desafio:
```
cd modules/docker/challanges/nginx-with-node/
```

Execute:
```
docker compose up -d
```

A aplicação está disponível na porta 8080.

http://localhost:8080
