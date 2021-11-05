# Boas vindas ao repositório Ebytr To Do !

Esse projeto consiste na resolução do desafio técnico proposto no processo seletivo da Ebytr para a vaga de pessoaa desenvolvedora jr.

---

# Sumário

* [Desenvolvimento] (#desenvolvimento)
* [Principais frameworks e bibliotecas utilizadas] (#principais-frameworks-e-bibliotecas)
* [Instruções para executar o projeto localmente] (#instruções-para-executar-o-projeto-localmente)

---

## Desenvolvimento <a name="desenvolvimento></a>

Foi desenvolvida uma aplicação full-stack de lista de tarefas. O back-end foi construído com a arquitetura MSC (model, service and controller) utilizando NodeJs, MongoDB e Express, enquanto que o front-end foi desenvolvido utilizando React. Tal combinação de frameworks é denominado de MERN, e sua escolha foi devido ao requisito do desafio técnico.

A aplicação consiste em uma lista de tarefas, no qual o usuário pode criar, deletar e editar uma tarefa. Além disso, a aplicação também possui uma área de login e cadastro de usuários.

---

## Principais frameworks e bibliotecas utilizadas <a name="principais-frameworks-e-bibliotecas></a>

<a href="https://www.mongodb.com/">MongoDB</a>
<a href="https://expressjs.com/">Express</a>
<a href="https://nodejs.org/en/">NodeJS</a>
<a href="https://mochajs.org/">Mocha</a>
<a href="https://www.chaijs.com/">Chai</a>
<a href="https://joi.dev/api/?v=17.4.2">Joi</a>
<a href="https://www.npmjs.com/package/jsonwebtoken">Jsonwebtoken</a>

<a href="https://reactjs.org/">React</a>
<a href="https://redux.js.org/">Redux</a>
<a href="https://tailwindcss.com/">Tailwind CSS</a>
<a href="https://fkhadra.github.io/react-toastify/introduction">Toastify</a>
<a href="https://jestjs.io//">Jest</a>
<a href="https://testing-library.com/docs/react-testing-library/intro">React Testing Library</a>

---

## Instruções para executar o projeto localmente <a name="instruções-para-executar-o-projeto-localmente"></a>

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
