const express = require("express");
const bodyParser = require("body-parser");
const { todo } = require("node:test");

const app = express();

//central state
let todos = [];

//find the given index
function findIndex(arr, idx) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      return i;
    }
  }
  return -1;
}

//get todo
app.get("/todos", (req, res) => {
  res.json(todos);
});

//get a single todo
app.get("/todos/:id", (req, res) => {});

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
app.post("/todos/:id", (req, res) => {});

//delete a specific todo
app.delete("/todo/:id", (req, res) => {
  const todoIdx = todos.findIndex(todos, parseInt(req.param.id));
  if (todoIdx == -1) {
    res.status(404).send("no item found for delete!");
  } else {
    todos = removeAtIndex(todos, todoIdx);
    res.status(200).send("deleted successfully!");
  }
});

//for all other routes, return 404
