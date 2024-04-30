// practicing some arrow functions and some tricks

const fs = require("fs");

//using arrow function for the callback, they
fs.readFile("./hello.txt", "utf-8", (err, data) => {
  console.log(data);
});

// 