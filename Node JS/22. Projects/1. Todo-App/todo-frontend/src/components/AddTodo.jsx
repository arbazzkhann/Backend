import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => setTodoName(event.target.value);
  const handleDateChange = (event) => setDueDate(event.target.value);

  const handleAddButtonClicked = () => {
    if (!todoName.trim()) return;
    onNewItem(todoName.trim(), dueDate || null);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-6 px-4">
      <div className="flex flex-col sm:flex-row gap-3 items-center bg-white shadow-md rounded-lg p-4">
        <input
          type="text"
          placeholder="Enter a todo"
          value={todoName}
          onChange={handleNameChange}
          className="flex-1 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label="Todo name"
        />

        <input
          type="date"
          value={dueDate}
          onChange={handleDateChange}
          className="w-full sm:w-40 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label="Due date"
        />

        <button
          type="button"
          onClick={handleAddButtonClicked}
          disabled={!todoName.trim()}
          className="inline-flex items-center justify-center px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
