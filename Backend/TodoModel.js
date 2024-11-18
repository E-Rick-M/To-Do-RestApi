class TodoModel{

    constructor(){
      this.todos=[];
      this.currentId=1;
    }

    create(title){
        const newTodo={id:this.currentId++,title,completed:false}
        this.todos.push(newTodo);
        return newTodo
    }

    getAll(){
        return this.todos;
    }
    getById(id){
        return this.todos.find(todo=>todo.id===id)
    }

    update(id,title,completed){
        const todo=this.getById(id);

        if(todo){
            todo.title=title !==undefined?title:todo.title
            todo.completed=completed !==undefined?completed:todo.completed
        }
        return todo;
    }

    delete(id){
        const index=this.todos.findIndex(todo=>todo.id===id)

        if(index!== -1){
            return this.todos.splice(index,1)[0]
        }
        return null
    }
}

module.exports=new TodoModel()