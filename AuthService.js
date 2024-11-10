// services/authService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserRepository = require('../repositories/userRepository');

async function registerUser(username, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return UserRepository.createUser(username, hashedPassword);
}

async function loginUser(username, password) {
  const user = await UserRepository.findUserByUsername(username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  return jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
}

module.exports = { registerUser, loginUser };
