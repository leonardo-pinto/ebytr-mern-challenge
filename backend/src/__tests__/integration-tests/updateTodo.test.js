/* eslint-disable sonarjs/no-duplicate-string */
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const server = require('../../api/app');
const { getConnection } = require('./connectionMock');

chai.use(chaiHttp);

const { expect } = chai;

const validName = 'username';
const validEmail = 'email@email.com';
const validPassword = '123456';
const todoExample = 'todo';
const fakeTodoId = '507f1f77bcf86cd799439011';

const objectWithBodyMessage = 'returns an object with a body';
const objectAttributeMessage = 'the object has a "message" attribute';

describe('/PUT /todos/:todoId', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('when the todo id does not exists', () => {
    let response;

    before(async () => {
      const usersCollection = connectionMock.db('TodoList').collection('users');
      await usersCollection.insertOne({ 
        name: validName, email: validEmail, password: validPassword,
      });

      const token = await chai.request(server)
        .post('/login')
        .send({ email: validEmail, password: validPassword,
        })
        .then((res) => res.body.token);

      await chai.request(server)
        .post('/todos')
        .send({ todo: todoExample })
        .set('authorization', token);

      response = await chai.request(server)
        .put(`/todos/${fakeTodoId}`)
        .send({ 
          todo: 'edited todo',
          status: 'pending',
          createdAt: new Date().toString(),
         })
        .set('authorization', token);
    });

    it('returns a 404 status code', () => {
      expect(response).to.have.status(404);
    });
  
    it(`${objectWithBodyMessage}`, () => {
      expect(response.body).to.be.an('object');
    });
  
    it(`${objectAttributeMessage}`, () => {
      expect(response.body).to.have.property('message');
    });
  
    it('"message" property has the text: "Todo id not found"', () => {
      expect(response.body.message).to.be.equal('Todo id not found');
    });
  });

  describe('when updates the todo successfully', () => {
    let response;

    before(async () => {
      const usersCollection = connectionMock.db('TodoList').collection('users');
      await usersCollection.insertOne({ 
        name: validName, email: validEmail, password: validPassword,
      });

      const token = await chai.request(server)
        .post('/login')
        .send({ email: validEmail, password: validPassword,
        })
        .then((res) => res.body.token);

      const { id, createdAt } = await chai.request(server)
        .post('/todos')
        .send({ todo: todoExample })
        .set('authorization', token)
        .then((res) => res.body);

      response = await chai.request(server)
        .put(`/todos/${id}`)
        .send({ 
          todo: 'edited todo',
          status: 'pending',
          createdAt,
         })
        .set('authorization', token);
    });

    it('returns a 200 status code', () => {
      expect(response).to.have.status(200);
    });
  
    it(`${objectWithBodyMessage}`, () => {
      expect(response.body).to.be.an('object');
    });
  
    it('the object has the attributes "id", "userId", "todo", "status", "createdAt"', () => {
      expect(response.body).to.include.all.keys('todoId', 'userId', 'todo', 'status', 'createdAt');
    });

    it('the object contains the updated recipe', () => {
      expect(response.body.todo).to.be.equal('edited todo');
    });
  });
});
