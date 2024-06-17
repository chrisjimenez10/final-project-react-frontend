import { useState, useEffect } from "react";


const Form = ({handleCreateTodo, todoToEdit, setTodoToEdit}) => {

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
        handleCreateTodo(formData);
        setFormData({
            name: "",
            description: ""
        });
    };

  return (

    <form onSubmit={handleSubmit}>

    <label htmlFor="name">Name: </label>
    <input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange}></input>


    <label htmlFor="description">Description: </label>
    <input id="description" name="description" type="text" required value={formData.description} onChange={handleInputChange}></input>

    <button type="submit" disabled={formData.name === "" || formData.description === ""}>Add</button>

</form>

  )
}

export default Form;