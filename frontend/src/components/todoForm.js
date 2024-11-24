const { useState } = require("react");


function ToDoForm({onAdd}){
    const [title,setTitle]=useState('')

    const AddToDoHandler=(event)=>{
        setTitle(event.target.value)
    }

    const handleSubmitHandler=(event)=>{
        event.preventDefault();

        if(!title|| title.trim()===''){
            return
        }
        onAdd(title)
        setTitle('')
    }

    return(
        <form onSubmit={handleSubmitHandler}>
            <label htmlFor="text">Add New To DO</label>
            <input type="text" value={title} id="text" onChange={AddToDoHandler} placeholder="Add New To-Do"/>
            <button type="submit">Add</button>
        </form>
    )
}

export default ToDoForm