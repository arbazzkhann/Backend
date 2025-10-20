function TodoItem({ id, todoName, todoDate, onDeleteClick }) {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
      <div className="flex-1 pr-4">
        <div className="text-gray-900 font-medium text-lg truncate">{todoName}</div>
        <div className="text-sm text-gray-500 mt-1">{todoDate || 'No due date'}</div>
      </div>

      <div className="flex-shrink-0 ml-4">
        <button
          type="button"
          onClick={() => onDeleteClick(id)}
          className="inline-flex items-center px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
