# Boas vindas ao repositório Ebytr To Do !

Esse projeto consiste na resolução do desafio técnico proposto no processo seletivo da Ebytr para a vaga de pessoaa desenvolvedora jr.

---

# Sumário

* [Desenvolvimento] (#desenvolvimento)
* [Principais frameworks e bibliotecas utilizadas] (#principais-frameworks-e-bibliotecas)
* [Instruções para executar o projeto localmente] (#instruções-para-executar-o-projeto-localmente)

---

## Desenvolvimento

Foi desenvolvida uma aplicação full-stack de lista de tarefas. O back-end foi construído com a arquitetura MSC (model, service and controller) utilizando NodeJs, MongoDB e Express, enquanto que o front-end foi desenvolvido utilizando React. Tal combinação de frameworks é denominado de MERN, e sua escolha foi devido ao requisito do desafio técnico.

A aplicação consiste em uma lista de tarefas, no qual o usuário pode criar, deletar e editar uma tarefa. Além disso, a aplicação também possui uma área de login e cadastro de usuários.

---

## Principais frameworks e bibliotecas utilizadas

* [MongoDB] (https://www.mongodb.com/)
* [Express] (https://expressjs.com/)
* [NodeJS] (https://nodejs.org/en/)
* [Mocha] (https://mochajs.org/)
* [Chai] (https://www.chaijs.com/)
* [Joi] (https://joi.dev/api/?v=17.4.2)
* [Jsonwebtoken] (https://www.npmjs.com/package/jsonwebtoken)


* [React] (https://reactjs.org/)
* [Redux] (https://redux.js.org/)
* [Tailwind CSS] (https://tailwindcss.com/)
* [Toastify] (https://fkhadra.github.io/react-toastify/introduction)
* [Jest] (https://jestjs.io/)
* [React Testing Library] (https://testing-library.com/docs/react-testing-library/intro/)

---

## Instruções para executar o projeto localmente

```bash
# Clone este repositório
$ git clone git@github.com:leonardo-pinto/ebytr-mern-challenge.git
```

### Front-end

```bash
# Acesse a pasta do projeto no terminal
$ cd frontend

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start
```

---

### Back-end

```bash
# Acesse a pasta do projeto no terminal
$ cd backend

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm run dev
```

---

Utilizando yarn
```bash
# Acesse a pasta do projeto no terminal
$ cd backend

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start
```

### Testes

```bash
# Acesse a pasta do projeto no terminal
$ cd backend ou cd frontend

# Execute os testes
$ npm run test

# Execute a cobertura dos testes
$ npm run test:coverage
```
