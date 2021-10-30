const { ObjectId } = require('mongodb');
const mongoConnection = require('./connection');

const dbConnection = async () => {
  const db = await mongoConnection.getConnection().then((conn) => conn.collection('todos'));

  return db;
};

const create = async (todo, userId) => {
  const db = await dbConnection();
  const createdAt = new Date().toString();
  const status = 'pending';
  const { insertedId: id } = await db.insertOne({ userId, todo, status, createdAt });
  
  return { id: ObjectId(id), userId, todo, status, createdAt };
};

module.exports = {
  create,
};
