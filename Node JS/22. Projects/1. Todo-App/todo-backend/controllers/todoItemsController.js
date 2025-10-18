const TodoItem = require('../models/TodoItem');


exports.createTodoItem = async (req, res, next) => {
    const { task, date } = req.body;
    const todoItem = new TodoItem({ task, date });
    await todoItem.save();
    res.status(201).json(todoItem);
}