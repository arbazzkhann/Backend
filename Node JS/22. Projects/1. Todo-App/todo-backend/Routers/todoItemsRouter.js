const express = require('express');

const todoRouter = express.Router();

const todoItemsController = require('../controllers/todoItemsController');

todoRouter.post('/item', todoItemsController.createTodoItem)

module.exports = todoRouter;