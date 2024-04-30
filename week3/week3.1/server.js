const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//central state
let todos = [];

//get todo
app.get("/todos", (req, res) => {
  res.json(todos);
});

//get a single todo
app.get("/todos/:id", (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if(!todo){
        res.status(404).send();
    } else {
        res.json(todo);
    }
});

//post todos
app.post("/todos", (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1_000_000),
    title: req.body.title,
    description: req.body.description,
  };

  //add to the todos array
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

//post a new todo
//app.post("/todos/:id", (req, res) => {});

//delete a specific todo
app.delete("/todos/:id", (req, res) => {
  const todoIdx = todos.findIndex((t) => t.id === parseInt(req.params.id));
  if (todoIdx == -1) {
    res.status(404).send("no item found for delete!");
  } else {
    //todos = removeAtIndex(todos, todoIdx);
    todos.splice(todoIdx, 1);
    res.status(200).send("deleted successfully!");
  }
});

//for all other routes, return 404
app.use((req, res, next) => {
  res.status(404).send();
});

app.listen(3000, () => {
  console.log(`Server started at http://localhost:3000`);
});
