const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

//local file i/o
function callbackFn(err, data) {
  console.log(data);
}

fs.readFile("./a.txt", "utf-8", callbackFn);

function calculateSum(counter) {
  let sum = 0;
  for (let i = 0; i < counter; i++) {
    sum += i;
  }
  return sum;
}
function handleSum(req, res) {
  // get the query from the user
  // when using the query parameter have to use like
  // localhost:3000/?counter=3000
  //using query parameters
  let counter = req.query.counter;
  const calculatedSum = calculateSum(counter);
  console.log(calculatedSum);
  let answer = `the sum is ` + calculatedSum;
  res.send(answer);
}

function startHTTPServer() {
  console.log(`Started http server at : http://localhost:${PORT}`);
}
function createUser(req, res) {
  res.send("hello world");
}
//other handlers
app.post("/createUser", createUser);

app.get("/handleSum2", handleSum);

app.listen(PORT, startHTTPServer);

let counter = 0;
console.log(calculateSum(counter));
