import React, { useState, useEffect } from 'react';

export default function TodoItem({ id, todoName, todoDate, onDeleteClick, onCompleteClick, onEditClick, completed, previousDates = [] }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(todoName || '');
  const [editDate, setEditDate] = useState('');

  useEffect(() => {
    setEditName(todoName || '');
    setEditDate(toInputValue(todoDate));
  }, [todoName, todoDate]);

  const formatDateDisplay = (value) => {
    if (!value) return null;
    const d = new Date(value);
    if (isNaN(d)) return String(value);
    const day = d.getDate();
    const month = d.toLocaleString('en-US', { month: 'short' });
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const toInputValue = (value) => {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d)) return '';
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const displayDate = formatDateDisplay(todoDate);

  const handleSave = () => {
    if (!editName || !editName.trim()) {
      alert('Todo name cannot be empty');
      return;
    }
    onEditClick && onEditClick(id, editName.trim(), editDate || null);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditName(todoName || '');
    setEditDate(toInputValue(todoDate));
    setIsEditing(false);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
      <div className="flex-1 pr-4">
        {!isEditing ? (
          <>
            <div className={`${completed ? 'text-gray-400 line-through' : 'text-gray-900'} font-medium text-lg truncate`}>
              {todoName}
            </div>
            <div className="flex items-center gap-3 mt-1">
              <div className="text-sm text-gray-500" title={todoDate ? new Date(todoDate).toLocaleString() : undefined}>
                {displayDate || 'No due date'}
              </div>
              {completed && <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Completed</span>}
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <input className="px-3 py-2 border rounded-md flex-1" value={editName} onChange={(e) => setEditName(e.target.value)} />
              <input type="date" className="px-3 py-2 border rounded-md" value={editDate} onChange={(e) => setEditDate(e.target.value)} />
            </div>
            {previousDates && previousDates.length > 0 && (
              <div className="text-xs text-gray-500">
                Previous dates:
                {previousDates.map((d, i) => (
                  <button key={i} type="button" onClick={() => setEditDate(toInputValue(d))} className="ml-2 inline-block px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs">
                    {formatDateDisplay(d)}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex-shrink-0 ml-4 flex items-center gap-2">
        {!isEditing ? (
          <>
            {!completed ? (
              <>
                <button type="button" onClick={() => setIsEditing(true)} className="inline-flex items-center px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm">Edit</button>
                <button type="button" onClick={() => onCompleteClick && onCompleteClick(id, true)} className="inline-flex items-center px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md text-sm">Complete</button>
              </>
            ) : (
              <button type="button" onClick={() => onCompleteClick && onCompleteClick(id, false)} className="inline-flex items-center px-3 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md text-sm">Reopen</button>
            )}
            <button type="button" onClick={() => onDeleteClick && onDeleteClick(id)} className="inline-flex items-center px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm">Delete</button>
          </>
        ) : (
          <>
            <button type="button" onClick={handleSave} className="inline-flex items-center px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm">Save</button>
            <button type="button" onClick={handleCancel} className="inline-flex items-center px-3 py-1.5 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md text-sm">Cancel</button>
          </>
        )}
      </div>
    </div>
  );
}
