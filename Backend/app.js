const express =require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const TodoController = require('./middlewares/Todos')

const app=express();
const PORT=5000;


app.use(cors())
app.use(bodyParser.json())

app.get('/todos',TodoController.getAllTodos);

app.post('/todos',TodoController.AddTodo)


app.patch('/todos/:id',TodoController.updateTodo)

app.delete('/todos/:id',TodoController.deleteTodo)


app.listen(PORT,()=>{
    console.log(`server is Running on http://localhost:${PORT}`)
})