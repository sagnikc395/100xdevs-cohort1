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
function doArithmatic(firstEl, secondEl, whatToDo) {
  //the third arguemnt is the function itself
  if (whatToDo === "sum") {
    return sum(firstEl, secondEl);
  } else if (whatToDo === "subtract") {
    return subtract(firstEl, secondEl);
  } else if (whatToDo === "multiply") {
    return multiply(firstEl, secondEl);
  } else if (whatToDo === "divide") {
    return divide(firstEl, secondEl);
  } else {
    throw new Error("noop!");
  }
}
try {
  let answer = doArithmatic(12, 45, sum);
  console.log(answer);
  let ans2 = doArithmatic(123, 123123, gilgamesh);
  console.log(ans2);
} catch (err) {
  console.error(err);
}
