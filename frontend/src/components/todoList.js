// function TodoList({todos,onUpdate,onDelete}){


//     return (
//         <ul>
//             {todos.length===0?<p>No Todos Found at The Moment:  {todos.map(todo=>(
//                 <li key={todo.id}>
//                     <input type="checkbox" checked={todo.completed} onChange={()=>onUpdate(todo.id,{completed:!todo.completed})}/>
//                     {todo.title}
//                     <button onClick={()=>onDelete(todo.id)}>Delete</button>
//                 </li>
//             ))} </p>}
           
//         </ul>
//     )
// }

// export default TodoList

function TodoList({ todos, onUpdate, onDelete }) {
    console.log(todos)
    // If there are no todos, display a message
    if (!Array.isArray(todos) || todos.length === 0) {
        return <p>No Todos Found at The Moment</p>;
      }
  
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onUpdate(todo.id, { title:todo.title ,completed: !todo.completed })}
            />
            {todo.title}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TodoList;
  