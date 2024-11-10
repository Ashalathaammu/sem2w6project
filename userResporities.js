// repositories/userRepository.js
const User = require('../models/User');

async function createUser(username, password) {
  return User.create({ username, password });
}

async function findUserByUsername(username) {
  return User.findOne({ where: { username } });
}

module.exports = { createUser, findUserByUsername };
