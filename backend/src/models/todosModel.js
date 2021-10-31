const { ObjectId } = require('mongodb');
const mongoConnection = require('./connection');

const dbConnection = async () => {
  const db = await mongoConnection.getConnection().then((conn) => conn.collection('todos'));

  return db;
};

const create = async (userId, todo, status, createdAt) => {
  const db = await dbConnection();
  
  const { insertedId: id } = await db.insertOne({ userId, todo, status, createdAt });
  
  return { id: ObjectId(id), userId, todo, status, createdAt };
};

module.exports = {
  create,
};
