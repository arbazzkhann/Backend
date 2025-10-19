//creating todo
export const addItemToServer = async (task, date) => {
    const response = await fetch("http://localhost:3001/api/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({task, date}),
    });
    const item = await response.json()
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
    }
}

//get todo items
export const getItemFromServer = async () => {
    const response = await fetch("http://localhost:3001/api/todo");
    const items = await response.json();
    return items.map(mapServerItemToLocalItem);
}

//mark as completed
export const markItemCompleted = async (id) => {
    const response = await fetch(`http://localhost:3001/api/todo/${id}/completed`, {
        method: "PUT"
    });
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