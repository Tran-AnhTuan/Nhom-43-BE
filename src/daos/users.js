const { ObjectId } = require('mongoose').Types;
const User = require('../models/users');

const createUser = async ({ email, name, password, device }) => {
  const user = await User.create({ email, name, password, device });
  return user;
};

const findUser = async (condition) => {
  if (ObjectId.isValid(condition)) {
    const user = await User.findById(condition);
    return user;
  }

  if (typeof condition === 'object' && condition !== null) {
    const user = await User.findOne(condition);
    return user;
  }

  return null;
};

const updateUser = async (userId, data) => {
  const user = await User.findByIdAndUpdate(userId, data, { new: true });
  return user;
};

const deleteUser = async (userId) => {
  await User.findByIdAndDelete(userId);
};

module.exports = { createUser, findUser, updateUser, deleteUser };