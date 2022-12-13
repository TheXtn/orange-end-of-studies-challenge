const express = require('express');
const Router = express.Router();

const userController = require('../controllers/AuthController');

Router.post('/add', userController.add_user);

Router.post('/login', userController.login);

module.exports = Router;