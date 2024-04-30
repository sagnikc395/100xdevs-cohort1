const express = require("express");

const app = express();

const todos = [];
//standard way to do callbacks
function handler(req, res) {
  var ctr = 0;
  for (var i = 0; i < 100; i++) {
    ctr++;
  }
  res.status(200).json(ctr);
}

app.post("/todos", handler);
//can use also using anonynmous functions or using arrow functions

app.get("/todos2", function (req, res) {
  res.json(todos);
});

app.get("/todos3", (req, res) => {
  res.json(todos);
});
