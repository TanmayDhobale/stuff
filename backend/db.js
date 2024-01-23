const { string, boolean } = require("zod")

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://admin:iBbw0gb0doyoHFvw@cluster0.gokoimq.mongodb.net/todo")

const todoSchema = mongoose.Schema({
  title: string,
  description: string,
  complate: boolean 
});
const todo = mongoose.model('todos' , todoSchema)
module.exports = { todo:todo}