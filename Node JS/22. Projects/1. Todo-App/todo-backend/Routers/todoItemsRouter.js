const express = require('express');

const todoRouter = express.Router();

const todoItemsController = require('../controllers/todoItemsController');

todoRouter.post('/api/todo', todoItemsController.createTodoItem)

module.exports = todoRouter;