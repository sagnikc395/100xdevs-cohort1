// maps , filters and other higher order functions in react.

//given a input array -> [1,2,3,5,6,2] each element is 2 * of its item

// const transformArr = (arr) => arr.forEach(item => item*2);

// console.log(transformArr([1,2,3,5,6,2]));

// when we push,pop etc to arr we are not changing an array as the underlying reference is the same
// still pointing to the same thing in the memory.

const doubleIt = (arr) => arr.map((val) => val * 2);

console.log(doubleIt([1, 2, 3, 5, 6, 2]));

//using map to transform a object.

let array = [
  {
    name: "sagnik1",
    age: 21,
  },
  {
    name: "sagnik2",
    age: 22,
  },
  {
    name: "sagnik3",
    age: 23,
  },
  {
    name: "sagnik4",
    age: 24,
  },
];

const isAllowed = (array) =>
  array.map((item) =>
    item.age > 22
      ? { name: item.name, age: item.age, isAllowed: true }
      : { name: item.name, age: item.age, isAllowed: false }
  );

console.log(isAllowed(array));

