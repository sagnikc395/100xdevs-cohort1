// experiments with writing functions in different ways in Javascript

const fs = require("fs");

function callback(err, data) {
  if (err) {
    console.error(err);
  }
  console.log(data);
}

fs.readFile("a.txt", "utf-8", callback);

//part2 ;using a anpnymous function
fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});

//part3 : using anonymous function via callbacks

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});
