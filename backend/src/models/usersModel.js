const mongoConnection = require('./connection');

const dbConnection = async () => {
  const db = await mongoConnection.getConnection().then((conn) => conn.collection('users'));

  return db;
};

const findEmail = async (email) => {
  const db = await dbConnection();
  const isEmailInDb = await db.findOne({ email });
  
  if (isEmailInDb) return true;

  return false;
};

const createUser = async (name, email, password) => {
  const db = await dbConnection();
  const { insertedId: id } = await db.insertOne({ name, email, password });
  
  return { id, name, email, password };
};

module.exports = {
  findEmail,
  createUser,
};
