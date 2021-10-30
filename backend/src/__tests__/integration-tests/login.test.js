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
const invalidEmail = 'email';
const validPassword = '123456';

const statusCode400Message = 'returns a 400 status code';
const objectWithBodyMessage = 'returns an object with a body';
const objectAttributeMessage = 'the object has a "message" attribute';

describe('/POST /login', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('when the "email" is not in the requisiton body', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/login')
        .send({ password: validPassword });
    });

    it(`${statusCode400Message}`, () => {
      expect(response).to.have.status(400);
    });

    it(`${objectWithBodyMessage}`, () => {
      expect(response.body).to.be.an('object');
    });

    it(`${objectAttributeMessage}`, () => {
      expect(response.body).to.have.property('message');
    });

    it('"message" property has the text: "email is required"', () => {
      expect(response.body.message).to.be.equal('"email" is required');
    });
  });

  describe('when the "email" format is invalid', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/login')
        .send({ email: invalidEmail, password: validPassword });
    });

    it(`${statusCode400Message}`, () => {
      expect(response).to.have.status(400);
    });

    it(`${objectWithBodyMessage}`, () => {
      expect(response.body).to.be.an('object');
    });

    it(`${objectAttributeMessage}`, () => {
      expect(response.body).to.have.property('message');
    });

    it('"message" property has the text: "email" must be a valid email', () => {
      expect(response.body.message).to.be.equal('"email" must be a valid email');
    });
  });

  describe('when the "password" is not in the requisiton body', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/login')
        .send({ email: validEmail });
    });

    it(`${statusCode400Message}`, () => {
      expect(response).to.have.status(400);
    });

    it(`${objectWithBodyMessage}`, () => {
      expect(response.body).to.be.an('object');
    });

    it(`${objectAttributeMessage}`, () => {
      expect(response.body).to.have.property('message');
    });

    it('"message" property has the text: "password is required"', () => {
      expect(response.body.message).to.be.equal('"password" is required');
    });
  });

  describe('when the email is not found in db or user credentials are incorrect', () => {
    let response;

    before(async () => {
      const usersCollection = connectionMock.db('TodoList').collection('users');
      await usersCollection.insertOne({
        name: validName,
        email: validEmail,
        password: validPassword,
      });

      response = await chai.request(server)
        .post('/login')
        .send({ email: 'otherEmail@email.com', password: '654321' });
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
    
    it('"message" property has the text: "Incorrect email or password"', () => {
      expect(response.body.message).to.be.equal('Incorrect email or password');
    });
  });

  describe('when the login is successfull', () => {
    let response;
  
    before(async () => {
      const usersCollection = connectionMock.db('Cookmaster').collection('users');
      await usersCollection.insertOne({
        name: validName,
        email: validEmail,
        password: validPassword,
      });
  
      response = await chai.request(server)
        .post('/login')
        .send({ email: validEmail, password: validPassword });
    });
  
    it('returns a 200 status code', () => {
        expect(response).to.have.status(200);
    });
      
    it(`${objectWithBodyMessage}`, () => {
      expect(response.body).to.be.an('object');
    });
      
    it(`${objectAttributeMessage}`, () => {
      expect(response.body).to.have.property('token');
    });
  });
});
