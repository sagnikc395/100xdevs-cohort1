function calc(a: number, b: number, op: "add" | "sub" | "div" | "mul") {
  if (op == "add") {
    return a + b;
  } else if (op == "sub") {
    return a - b;
  } else if (op == "mul") {
    return a * b;
  } else if (op == "div") {
    return a / b;
  }
  return undefined;
}

console.log(calc(123,456,'add'));
