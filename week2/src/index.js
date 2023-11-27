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
//52:54
app.get("/", (req, res) => {
  //callbackFn
  res.send(`Hello , world!`);
});
function startHTTPServer() {
  console.log(`Started http server at : http://localhost:${PORT}`);
}

app.listen(PORT, startHTTPServer);

let counter = 0;
console.log(calculateSum(counter));
