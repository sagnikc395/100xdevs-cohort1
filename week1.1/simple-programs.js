//assignmetns

//sum from 1-100

const sumRange = (start, end) => {
  let result = 0;
  for (let i = start; i <= end; i++) {
    result += i;
  }
  return result;
};

//fibonacci
const fibonacci = (n) => {
  if (n == 0) {
    return 1;
  } else if (n == 1) {
    return 2;
  } else return fibonacci(n - 2) + fibonacci(n - 1);
};

//pattern creation

const simplePattern = (rows) => {
  let res = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < i; j++) {
      res += "*";
    }
    res += "\n";
  }
  return res.trim();
};

console.log(sumRange(1, 100));
console.log(fibonacci(10));
console.log(simplePattern(5));
