const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/userController');

// @route    POST users/register
// @desc     Register a new user
router.post('/register', register);

// @route    POST users/login
// @desc     Log in a user and get a token
router.post('/login', login);

module.exports = router;
