const express = require("express");
const { db}  = require("./db");
const { createtodo, updatetodo } = require('./type');
const app = express()
app.use(express.json());


app.post("/todo" , async(req , res )=>{
const createTodo  = req.body;
const parsedTodo = createtodo.safeParse(createTodo)
if (!parsedTodo.success){
res.status(404).json({
mass : " u have send wrong input "})
          return;}
      await todo.create({
  title: createTodo.title,
  description: createTodo.description,
  complate: false
});
          res.json({  massage:" ur todo created"})
})

app.get("/todos" , async(req , res)=>{
 const todo = await todo.find({});
 res.json({todo})

}) 

app.put("/complate" , async (req , res)=>{
const putTodo = req.body();
const  updateTodo = updatetodo.safeParse(putTodo)
if(!updateTodo.success){
res.status(400).json({
massage :"u are doing something wrong"})
return 
} await todo.updateOne({
  _id: req.body.id
}, {
  complate: true
});

 res.json({  massage:" ur todo created"})

} )

app.listen(3000).then(console.log("server statres At port 3000"))