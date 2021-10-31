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

describe('/GET /todos', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('when the there are todos created', () => {
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
        .get('/todos')
        .set('authorization', token);
    });

    it('returns a 201 status code', () => {
      expect(response).to.have.status(200);
    });
  
    it('returns an array', () => {
      expect(response.body).to.be.an('array');
    });

    it('the array contains the created todo', () => {
      expect(response.body[0].todo).to.be.equal(todoExample);
    });
  });
});