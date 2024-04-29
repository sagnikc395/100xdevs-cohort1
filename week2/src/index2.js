const express = require("express");
const app = express();

const PORT = 3000;

//adding middleware
function smallMiddleware(req, res, next) {
  console.log(`form inside middleware ${req.headers.counter}`);
  //res.send('error from inside the midleware');
  next();
}

app.use(smallMiddleware);

const calculateSum = (arg) => {
  let res = 0;
  for (let i = 0; i < arg; i++) {
    res += i;
  }
  return res;
};

app.get("/handleSum", function (req, res) {
  console.log("hit the route on handleSum");
  res.send("help me!!!!!1");
});

app.post("/handleSum", function (req, res) {
  //log the results
  //log the queries and log the headers
  console.log(req.query);
  console.log(req.headers);
  let counter = req.headers.counter;
  if (counter < 10000) {
    let calcSum = calculateSum(Number(counter));
    res.status(200).send(`post requests succesfull, result is ${calcSum}`);
  } else {
    res.status(411).send("you have sent a very big number!!!");
  }
});

function init() {
  console.log(`Started server on http://localhost:${PORT}/`);
}

app.listen(PORT, init);
