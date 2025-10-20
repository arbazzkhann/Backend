import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick, onCompleteClick, onEditClick }) => {
  if (!todoItems || todoItems.length === 0) {
    return <div className="w-full max-w-3xl mx-auto px-4 mb-8"></div>;
  }

  const incomplete = todoItems.filter((it) => !it.completed);
  const completed = todoItems.filter((it) => it.completed);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 mb-8 space-y-6">
      {/* Incomplete tasks (top) */}
      <ul className="space-y-3">
        {incomplete.map((item) => (
          <li key={item.id}>
            <TodoItem
              id={item.id}
              todoDate={item.dueDate}
              todoName={item.name}
              onDeleteClick={onDeleteClick}
              onCompleteClick={onCompleteClick}
              onEditClick={onEditClick}
              previousDates={item.previousDates}
              completed={item.completed}
            />
          </li>
        ))}
      </ul>

      {/* Completed tasks (bottom) */}
      {completed.length > 0 && (
        <div className="pt-4 border-t border-gray-200/60">
          <h3 className="text-sm text-gray-500 mb-3">Completed</h3>
          <ul className="space-y-3">
            {completed.map((item) => (
              <li key={item.id}>
                <TodoItem
                  id={item.id}
                  todoDate={item.dueDate}
                  todoName={item.name}
                  onDeleteClick={onDeleteClick}
                  onCompleteClick={onCompleteClick}
                  onEditClick={onEditClick}
                  previousDates={item.previousDates}
                  completed={item.completed}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoItems;
