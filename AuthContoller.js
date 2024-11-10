// controllers/authController.js
const AuthService = require('../services/authService');

async function register(req, res) {
  try {
    const { username, password } = req.body;
    const user = await AuthService.registerUser(username, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    const token = await AuthService.loginUser(username, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { register, login };
