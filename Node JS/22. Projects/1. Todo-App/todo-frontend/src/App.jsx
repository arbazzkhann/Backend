import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useEffect, useState } from "react";
import { addItemToServer, deleteItemFromServer, getItemFromServer } from './services/itemsService.js';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemFromServer()
    .then(initialItems => {
      setTodoItems(initialItems);
    });
  },[]);

  const handleNewItem = async (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const serverItem = await addItemToServer(itemName, itemDueDate)
    const newTodoItems = [
      ...todoItems,
      serverItem,
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = async (id) => {
    const deleteId = await(deleteItemFromServer(id));
    const newTodoItems = todoItems.filter(item => item.id !== deleteId);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
