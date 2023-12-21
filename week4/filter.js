//given an array of object which have 2 fields name and age , need
// to create an array which has 3 fields

const array = [
  {
    name: "harkirat",
    age: 21,
  },
  { name: "raman", age: 24 },
  {
    name: "aryan",
    age: 12,
  },
];
let newArray = [];

//filter people based on the third key is allowed >=18
//itertaive solution
for (let i = 0; i < array.length; i++) {
  if (array[i].age >= 18) {
    newArray.push({
      name: array[i].name,
      age: array[i].age,
      isallowed: true,
    });
  } else {
    newArray.push({
      name: array[i].name,
      age: array[i].age,
      isallowed: false,
    });
  }
}
console.log(newArray);
//using maps
let newArray2 = array.map((value) => {
  if (value.age >= 18) {
    return {
      ...value,
      isallowed: true,
    };
  } else {
    return {
      ...value,
      isallowed: false,
    };
  }
});

console.log(newArray2);
