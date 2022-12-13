const express = require('express');
const Router = express.Router();

const itemController = require('../controllers/ItemController');

Router.get('/', itemController.all_items);

Router.post('/add', itemController.add_item);

Router.put('/update:id', itemController.update_item);

Router.delete('/delete/:id', itemController.delete_item);

Router.get('/details/:id', itemController.get_item);

module.exports = Router;