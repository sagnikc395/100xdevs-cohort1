const fs = require("fs");

function complexFn(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}

function fileIsRead(filePath) {
  fs.readFile(filePath, "utf8", (err, contents) => {
    if (err) {
      console.error(err);
      return;
    }
    const parsedContents = parseInt(contents);
    if (!isNaN(parsedContents)) {
      //if content not empty then run complexFunction on it
      complexFn(parsedContents);
    } else {
      console.error(`File contents are not a valid number`);
    }
  });
}

// //read this in async fashion
// let res = readFromFile();

// //call complexFn on what we read from file

fileIsRead("./asyncInputInvalid.txt");
