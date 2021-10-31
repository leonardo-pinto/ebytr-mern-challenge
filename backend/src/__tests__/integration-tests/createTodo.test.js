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

const objectWithBodyMessage = 'returns an object with a body';
const objectAttributeMessage = 'the object has a "message" attribute';

describe('/POST /todos', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('it is not possible to create a new todo without a token', () => {
    let response;

    before(async () => {
      const usersCollection = connectionMock.db('TodoList').collection('users');
      await usersCollection.insertOne({ 
        name: validName, email: validEmail, password: validPassword,
      });

      await chai.request(server)
        .post('/login')
        .send({ email: validEmail, password: validPassword,
        })
        .then((res) => res.body.token);

      response = await chai.request(server)
        .post('/todos')
        .send({ todo: todoExample });
    });

    it('returns a 401 status code', () => {
      expect(response).to.have.status(401);
    });

    it(`${objectWithBodyMessage}`, () => {
      expect(response.body).to.be.an('object');
    });

    it(`${objectAttributeMessage}`, () => {
      expect(response.body).to.have.property('message');
    });

    it('"message" property has the text: "missing auth token"', () => {
      expect(response.body.message).to.be.equal('missing auth token');
    });
  });

  describe('it is not possible to create a new todo using an invalid token', () => {
    let response;
  
    before(async () => {
      const usersCollection = connectionMock.db('TodoList').collection('users');
      await usersCollection.insertOne({ 
        name: validName, email: validEmail, password: validPassword,
      });
  
      await chai.request(server)
        .post('/login')
        .send({ email: validEmail, password: validPassword,
        })
        .then((res) => res.body.token);
  
        response = await chai.request(server)
        .post('/todos')
        .send({ todo: todoExample })
        .set('authorization', 'invalid token');
    });
  
    it('returns a 401 status code', () => {
      expect(response).to.have.status(401);
    });
  
    it(`${objectWithBodyMessage}`, () => {
      expect(response.body).to.be.an('object');
    });
  
    it(`${objectAttributeMessage}`, () => {
      expect(response.body).to.have.property('message');
    });
  
    it('"message" property has the text: "jst malformed"', () => {
      expect(response.body.message).to.be.equal('jwt malformed');
    });
  });

  describe('when the todo is not in the requisition body', () => {
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
  
      response = await chai.request(server)
        .post('/todos')
        .set('authorization', token);
    });

    it('returns a 400 status code', () => {
      expect(response).to.have.status(400);
    });
  
    it(`${objectWithBodyMessage}`, () => {
      expect(response.body).to.be.an('object');
    });
  
    it(`${objectAttributeMessage}`, () => {
      expect(response.body).to.have.property('message');
    });
  
    it('"message" property has the text: "todo is required"', () => {
      expect(response.body.message).to.be.equal('"todo" is required');
    });
  });

  describe('when the todo is created successfully', () => {
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
  
        response = await chai.request(server)
        .post('/todos')
        .send({ todo: todoExample })
        .set('authorization', token);
    });
  
    it('returns a 201 status code', () => {
      expect(response).to.have.status(201);
    });
  
    it(`${objectWithBodyMessage}`, () => {
      expect(response.body).to.be.an('object');
    });
  
    it('the object has the attributes: "id", "userId", "todo", "status", "createdAt"', () => {
      expect(response.body).to.include.all.keys('id', 'userId', 'todo', 'status', 'createdAt');
    });
  });
});
