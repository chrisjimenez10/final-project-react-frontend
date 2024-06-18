import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Form = ({handleCreateTodo, todoToEdit, setTodoToEdit, handleEditTodo}) => {

    const navigate = useNavigate();

    //State
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });

    //Edit Feature
    useEffect(()=>{
        if(todoToEdit){
            setFormData({
                name: todoToEdit.name,
                description: todoToEdit.description,
            });
        }
    }, [todoToEdit]);

    //Functions
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todoToEdit){
            handleEditTodo(todoToEdit.id, formData);
            navigate("/backlog");
        }else{
            handleCreateTodo(formData);
        }
        setFormData({
            name: "",
            description: ""
        });
        setTodoToEdit(null);
    };

  return (

    <form onSubmit={handleSubmit}>

    <label htmlFor="name">Task: </label>
    <input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange}></input>


    <label htmlFor="description">Description: </label>
    <textarea id="description" name="description" type="text" required value={formData.description} onChange={handleInputChange}></textarea>

    <button type="submit" disabled={formData.name === "" || formData.description === ""}>{todoToEdit ? "Edit" : "Add"}</button>

</form>

  )
}

export default Form;