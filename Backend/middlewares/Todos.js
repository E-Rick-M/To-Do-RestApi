// const bodyParser = require("body-parser");
const TodoModel = require("../TodoModel")


exports.getAllTodos=(req,res,next)=>{
    const todos=TodoModel.getAll()
    res.status(200).json({todos,success:'Todos fetched Successfully!'});
}

exports.AddTodo=(req,res)=>{
    const {title}=req.body;

    if(!title){
        return res.status(400).json({error:'Title is Required'})
    }

    const newTodo=TodoModel.create(title)
    res.status(201).json(newTodo)
}
exports.updateTodo=(req,res)=>{
    const {id}=req.params
    const {title,completed}=req.body
    console.log("Received update request:", id, title, completed);
    const updatedTodo=TodoModel.update(parseInt(id),title,completed)

    if(!updatedTodo){
        return res.status(404).json({error:'Todo Not Found to Update'})
    }
    res.status(201).json(updatedTodo)
}
exports.deleteTodo=(req,res)=>{
    const {id}=req.params
    const deletedTodo=TodoModel.delete(parseInt(id))
    if(!deletedTodo){
        return res.status(404).json({error:'Todo Not Found to Delete'})
    }
    res.status(201).json(deletedTodo)
}