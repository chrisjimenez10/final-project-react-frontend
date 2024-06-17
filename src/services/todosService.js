const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

//Functions

    //GET
const fetchTodos = async () => {
    try{
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error.message);
    }
};

//POST
const createTodo = async (todoData) => {
    try{
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(todoData),
        });
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error.message)
    }
};

//PUT
const editTodo = async (id, todoData) => {
    try{
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(todoData),
        });
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error.message)
    }
};

//DELETE
const deleteTodo = async (id) => {
    try{
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error.message)
    }
};

//Export
export {fetchTodos, createTodo, editTodo, deleteTodo};
