const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

function middleware1(req, res, next) {
  console.log(`from middleware : ${req.headers.counter}`);
  next();
}
//registering the middleware.
//app.use(middleware1);

app.use(bodyParser.json());

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
//app.get("/handleSum2", handleSecondRequest);

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
  //body not given by express
  //logging the body
  console.log(req.body);
  console.log(req.headers);
  let counter = req.headers.counter;
  const calculatedSum = calculateSum(counter);
  console.log(calculatedSum);
  let answer = `the sum is ` + calculatedSum;
  res.send(answer);
}
app.post("/handleSum3", postHandlerSum3);

//app.get("/:username", newUserSignup);

function calculateMult(counter) {
  let mult = 1;
  for (let i = 1; i <= counter; i++) {
    mult *= counter;
  }
  return mult;
}

function postHandlerSum4(req, res) {
  // console.log(req.body);
  //read from the body properties
  //i.e from the JSON file that we have sent.
  console.log(req.body);
  let counter = req.body.counter;
  if (counter < 100_000) {
    let calcSum = calculateSum(counter);
    // let ans = `the sum is ${calcSum}`;
    let answerObj = { sum: calcSum };
    //using function currying
    //sending now JSON.
    //hard to encode string like this everytime
    // 99% time it is encoded in JSON.
    // let stringAns = `The sum is ${calculateSum(
    //   counter
    // )} and the mul is ${calculateMult(counter)}`;
    res.status(200).send(answerObj);
  } else {
    //throw a 401 error status
    res.status(411).send("Large Compute not allowed !!");
  }
}

function givePage(req, res) {
  res.status(200).send(`<html>
  <body>
    <h1>lOL</h1>
  </body>
</html>`);
}

function givePage2(req, res) {
  res.sendFile(__dirname + "/index.html");
}

app.post("/handleSum4", postHandlerSum4);

app.get("/", givePage);
app.get("/page2", givePage2);

app.listen(PORT, startHTTPServer);

let counter = 0;
console.log(calculateSum(counter));
