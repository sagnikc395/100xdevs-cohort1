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
  let counter2 = req.query.counter2;
  let counter3 = req.query.counter3;
  const calculatedSum = calculateSum(counter);
  console.log(calculatedSum);
  console.log(`Counter 2 value is ${counter2}`);
  console.log(`Counter 3  value is ${counter3}`);
  let answer = `the sum is ` + calculatedSum;
  res.send(answer);
}

function handleSecondRequest(req, res) {
  res.send(`hello world`);
}

function startHTTPServer() {
  console.log(`Started http server at : http://localhost:${PORT}`);
}
function createUser(req, res) {
  res.send("hello world");
}
//other handlers
app.post("/createUser", createUser);

app.get("/handleSum", handleSum);
app.get("/handleSum2", handleSecondRequest);

app.listen(PORT, startHTTPServer);

let counter = 0;
console.log(calculateSum(counter));
