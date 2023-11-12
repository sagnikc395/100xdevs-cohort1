function sum(index1, index2) {
  return index1 + index2;
}
function subtract(index1, index2) {
  return index1 - index2;
}
function multiply(index1, index2) {
  return index1 * index2;
}
function divide(index1, index2) {
  return index1 / index2;
}
function doArithmatic(firstEl, secondEl, arithmaticFn) {
  //the third arguemnt is the function itself
  return arithmaticFn(firstEl, secondEl);
}

let answer = doArithmatic(12, 45, sum);
console.log(answer);
