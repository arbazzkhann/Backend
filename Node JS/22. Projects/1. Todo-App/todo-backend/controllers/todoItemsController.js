const TodoItem = require('../models/TodoItem');


exports.createTodoItem = async (req, res, next) => {
    console.log(req.body);
    const { task, date } = req.body;
    const todoItem = new TodoItem({ task, date });
    await todoItem.save();
    res.status(201).json(todoItem);
}

exports.getTodoItems = async (req, res, next) => {
    const todoItems = await TodoItem.find();
    res.json(todoItems);
}

exports.deleteTodoItem = async (req, res, next) => {
    const { id } = req.params;
    await TodoItem.findByIdAndDelete(id);
    res.status(204).json({_id: id});
}

exports.updateTodoItem = async (req, res, next) => {
    const { id } = req.params;
    const { task, date } = req.body;
    const todoItem = await TodoItem.findById(id);
    if (!todoItem) {
        return res.status(404).json({ message: 'Item not found' });
    }
    // if date changed, push the previous date into previousDates
    if (date && todoItem.date && new Date(date).getTime() !== new Date(todoItem.date).getTime()) {
        todoItem.previousDates = todoItem.previousDates || [];
        todoItem.previousDates.push(todoItem.date);
    }
    todoItem.task = task;
    todoItem.date = date;
    await todoItem.save();
    const updated = todoItem;
    if (!updated) {
        return res.status(404).json({ message: 'Item not found' });
    }
    res.json(updated);
}

exports.markCompleted = async (req, res, next) => {
    const { id } = req.params;
    const todoItem = await TodoItem.findById(id);
    if (!todoItem) {
        return res.status(404).json({ message: 'Item not found' });
    }
    // Allow client to set completed true/false by sending { completed: boolean } in the request body.
    // If not provided, default to true (mark as completed).
    const { completed } = req.body;
    todoItem.completed = typeof completed === 'boolean' ? completed : true;
    await todoItem.save();
    res.json(todoItem);
}