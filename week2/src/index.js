const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

function middleware1(req, res, next) {
  console.log(`from middleware : ${req.headers.counter}`);
  next();
}
//registering the middleware.
app.use(middleware1);

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
//handler for put request
function randomUserGenerate(req, res) {
  res.send(`You have been made a random user !`);
}

function deleteUsers(req, res) {
  //global purge of all users.
  res.send(`All users have been succesfully deleted !`);
}

app.get("/handleSum", handleSum);
app.get("/handleSum2", handleSecondRequest);

app.post("/createUser", createUser);

//adding more handlers
app.put("/randomUser", randomUserGenerate);
app.delete("/deleteUsers", deleteUsers);

function newUserSignup(req, res) {
  //console.log(req.params.username);

  const user = req.params.username;
  //remove username from the user
  const displayName = user.slice(0, user.length - 6);
  res.send(`New user ${displayName} dropped!`);
}

//week2.2
//post handler

function postHandlerSum3(req, res) {
  // let counter = req.query.counter;
  // let counter2 = req.query.counter2 ;
  // let counter3 = req.query.counter3;
  console.log(req.headers);
  let counter = req.headers.counter;
  const calculatedSum = calculateSum(counter);
  console.log(calculatedSum);
  let answer = `the sum is ` + calculatedSum;
  res.send(answer);
}
app.post("/handleSum3", postHandlerSum3);

//app.get("/:username", newUserSignup);

app.listen(PORT, startHTTPServer);

let counter = 0;
console.log(calculateSum(counter));
