const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { getConnection } = require('./connectionMock');
const server = require('../../api/app');

chai.use(chaiHttp);
const { expect } = chai;
const validName = 'username';
const invalidName = 'a';
const validEmail = 'email@email.com';
const invalidEmail = 'email';
const validPassword = '123456';
const invalidPassword = '123';

const statusCodeMessage = 'returns a 400 status code';
const objectWithBodyMessage = 'returns an object with a body';
const objectAttributeMessage = 'the object has a "message" attribute';

describe('/POST /signup', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('when the "name" is not in the requisiton body', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/signup')
        .send({ email: validEmail, password: validPassword });
    });

    it(`${statusCodeMessage}`, () => {
      expect(response).to.have.status(400);
    });

    it(`${objectWithBodyMessage}`, () => {
      expect(response.body).to.be.an('object');
    });

    it(`${objectAttributeMessage}`, () => {
      expect(response.body).to.have.property('message');
    });

    it('"message" property has the text: "name is required"', () => {
      expect(response.body.message).to.be.equal('"name" is required');
    });
  });

  describe('when the "name" is invalid', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/signup')
        .send({ name: invalidName, email: validEmail, password: validPassword });
    });

    it(`${statusCodeMessage}`, () => {
      expect(response).to.have.status(400);
    });

    it(`${objectWithBodyMessage}`, () => {
      expect(response.body).to.be.an('object');
    });

    it(`${objectAttributeMessage}`, () => {
      expect(response.body).to.have.property('message');
    });

    it('"message" property has the text: "name length must be at least 5 characters long"', () => {
      expect(response.body.message).to.be.equal('"name" length must be at least 5 characters long');
    });
  });

  describe('when the "email" is not in the requisiton body', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/signup')
        .send({ name: validName, password: validPassword });
    });

    it(`${statusCodeMessage}`, () => {
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

  describe('when the "email" is invalid', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/signup')
        .send({ name: validName, email: invalidEmail, password: validPassword });
    });

    it(`${statusCodeMessage}`, () => {
      expect(response).to.have.status(400);
    });

    it(`${objectWithBodyMessage}`, () => {
      expect(response.body).to.be.an('object');
    });

    it(`${objectAttributeMessage}`, () => {
      expect(response.body).to.have.property('message');
    });

    it('"message" property has the text: "name length must be at least 5 characters long"', () => {
      expect(response.body.message).to.be.equal('"email" must be a valid email');
    });
  });

  describe('when the "password" is not in the requisiton body', () => {
    let response;
  
    before(async () => {
      response = await chai.request(server)
        .post('/signup')
        .send({ name: validName, email: validEmail });
    });
  
    it(`${statusCodeMessage}`, () => {
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
  
  describe('when the "password" is invalid', () => {
    let response;
  
    before(async () => {
      response = await chai.request(server)
        .post('/signup')
        .send({ name: validName, email: validEmail, password: invalidPassword });
    });
  
    it(`${statusCodeMessage}`, () => {
      expect(response).to.have.status(400);
    });
  
    it(`${objectWithBodyMessage}`, () => {
      expect(response.body).to.be.an('object');
    });
  
    it(`${objectAttributeMessage}`, () => {
      expect(response.body).to.have.property('message');
    });
  
    it('"message" property has text: "password length must be at least 6 characters long"', () => {
       expect(response.body.message)
       .to.be.equal('"password" length must be at least 6 characters long');
    });
  });

  describe('when the user is created successfully', () => {
    let response;

    before(async () => {
      const usersCollection = connectionMock.db('TodoList').collection('users');
      await usersCollection.deleteMany({});
      response = await chai.request(server)
        .post('/signup')
        .send({ name: validName, email: validEmail, password: validPassword });
    });

    it('returns a 201 status code', () => {
      expect(response).to.have.status(201);
    });

    it(`${objectWithBodyMessage}`, () => {
      expect(response.body).to.be.an('object');
    });

    it(`${objectAttributeMessage}`, () => {
      expect(response.body).to.have.property('message');
    });

    it('"message" property has text: "User created successfully!', () => {
      expect(response.body.message).to.be.equal('User created successfully!');
    });
  });

  describe('when the email already exists', () => {
    let response;

    before(async () => {
      const usersCollection = connectionMock.db('TodoList').collection('users');
      await usersCollection.insertOne({
        name: 'username',
        email: 'email@email.com',
        password: '12345679',
      });

      response = await chai.request(server)
        .post('/signup')
        .send({ name: validName, email: validEmail, password: validPassword });
    });

    it('returns a 409 status code', () => {
      expect(response).to.have.status(409);
    });

    it(`${objectWithBodyMessage}`, () => {
      expect(response.body).to.be.an('object');
    });

    it(`${objectAttributeMessage}`, () => {
      expect(response.body).to.have.property('message');
    });

    it('"message" property has the text: "email already registered"', () => {
      expect(response.body.message).to.be.equal('email already registered');
    });
  });
});
