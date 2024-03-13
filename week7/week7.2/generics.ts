function identity<T>(arg: T): string {
  return `This is the ${arg}, of type ${typeof arg}`;
}

let output = identity<string>("mystring");
let output2 = identity<number>(1000);

console.log(output);
console.log(output2);

//getting the first element of an array using generic

function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

const el = getFirstElement(["sagnikchatterjee", "paramita chatterjee"]);
console.log(el.toLowerCase());
