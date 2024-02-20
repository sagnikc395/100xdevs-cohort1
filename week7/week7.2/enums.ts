enum Arithmatic {
  Add,
  Sub,
  Div,
  Mul,
}

enum Shape {
  Circle,
  Square,
  Rectangle,
}

function calc(a: number, b: number, type: Arithmatic) {
  console.log(type);
  return 1;
}

const res = calc(1, 2, Arithmatic.Div);
