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

const findTodoById = async (todoId) => {
  if (!ObjectId.isValid(todoId)) return null;
  const db = await dbConnection();
  const todo = await db.findOne({ _id: ObjectId(todoId) });

  if (!todo) return null;

  return todo;
};

const exclude = async (todoId) => {
  const db = await dbConnection();
  await db.deleteOne({ _id: ObjectId(todoId) });

  return true;
};

const getAll = async (userId) => {
  const db = await dbConnection();
  const todos = await db.find({ userId }).toArray();

  return todos;
};

const update = async ({ todo, status, createdAt, todoId, userId }) => {
  const db = await dbConnection();
  await db.findOneAndUpdate({ _id: ObjectId(todoId) },
  { $set: { userId, todo, status, createdAt } });

  return {
    todoId,
    userId,
    todo,
    status,
    createdAt,
  };
};

module.exports = {
  create,
  findTodoById,
  exclude,
  getAll,
  update,
};
