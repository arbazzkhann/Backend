//creating todo
export const addItemToServer = async (task, date) => {
    const response = await fetch("http://localhost:3001/api/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({task, date}),
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Failed to add item: ${response.status} ${text}`);
    }

    const item = await response.json();
    return mapServerItemToLocalItem(item);
}

//mapping into serverItem
const mapServerItemToLocalItem = (serverItem) => {
    return {
        id: serverItem._id,
        name: serverItem.task,
        dueDate: serverItem.date,
        completed: serverItem.completed,
        createdAt: serverItem.createdAt,
        updatedAt: serverItem.updatedAt
        ,previousDates: serverItem.previousDates || []
    }
}

//get todo items
export const getItemFromServer = async () => {
    const response = await fetch("http://localhost:3001/api/todo");
    const items = await response.json();
    return items.map(mapServerItemToLocalItem);
}

//mark as completed
export const markItemCompleted = async (id, completed = true) => {
    const response = await fetch(`http://localhost:3001/api/todo/${id}/completed`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed }),
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Failed to update completed: ${response.status} ${text}`);
    }
    const item = await response.json();
    return mapServerItemToLocalItem(item);
}

//delete todo
export const deleteItemFromServer = async (id) => {
    await fetch(`http://localhost:3001/api/todo/${id}`, {
        method: "DELETE"
    });
    return id;
}

// update todo (task, date)
export const updateItemOnServer = async (id, task, date) => {
    const response = await fetch(`http://localhost:3001/api/todo/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task, date }),
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Failed to update item: ${response.status} ${text}`);
    }
    const item = await response.json();
    return mapServerItemToLocalItem(item);
}