/*
 * * * * *
 *       *
 *       *
 *       *
 * * * * *
 */
const rows = 10;
const cols = 5;

function printSingleFullRow(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += "*";
  }
  console.log(str);
}

function printPartialRow(n) {
  let str = "";
  str += "*";
  //now add n-2 spaces
  for (let i = 0; i < n - 2; i++) {
    str += " ";
  }
  // add a start at last
  str += "*";
  console.log(str);
}

function printWholeThing(rows, cols) {
  for (let i = 0; i < rows; i++) {
    // single row only at the end
    if (i == 0 || i == rows - 1) {
      printSingleFullRow(cols);
    } else {
      printPartialRow(cols);
    }
  }
}

printWholeThing(rows, cols);
