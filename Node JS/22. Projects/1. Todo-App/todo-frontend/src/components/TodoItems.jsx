import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-3 px-4 mb-8">
      {todoItems.length === 0 ? null : (
        <ul className="space-y-3">
          {todoItems.map((item) => (
            <li key={item.id}>
              <TodoItem
                id={item.id}
                todoDate={item.dueDate}
                todoName={item.name}
                onDeleteClick={onDeleteClick}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoItems;
