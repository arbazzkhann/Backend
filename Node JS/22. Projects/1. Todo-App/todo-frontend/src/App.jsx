import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useEffect, useState } from "react";
import { addItemToServer, deleteItemFromServer, getItemFromServer } from './services/itemsService.js';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItemFromServer()
      .then((initialItems) => {
        setTodoItems(initialItems || []);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    try {
      if (!itemName || !itemName.trim()) {
        throw new Error('Todo name cannot be empty');
      }
      const serverItem = await addItemToServer(itemName, itemDueDate);
      setTodoItems((prev) => [serverItem, ...prev]);
    } catch (err) {
      console.error('Failed to add todo:', err);
      // simple user-facing notification; you can replace with a better UI later
      alert(`Failed to add todo: ${err.message}`);
    }
  };

  const handleDeleteItem = async (id) => {
    const deleteId = await deleteItemFromServer(id);
    setTodoItems((prev) => prev.filter((item) => item.id !== deleteId));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto">
        <AppName />

        <main className="px-4">
          <AddTodo onNewItem={handleNewItem} />

          {loading ? (
            <div className="w-full max-w-3xl mx-auto px-4 text-center py-8">Loading...</div>
          ) : todoItems.length === 0 ? (
            <WelcomeMessage />
          ) : null}

          <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
        </main>
      </div>
    </div>
  );
}

export default App;
