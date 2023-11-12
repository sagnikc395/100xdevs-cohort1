console.log(`Hello, world!`);
console.log(2 + 2);

let name; //by default is undefined
console.log(name);
name = "Mosh";
console.log(name);

//var names cannot be reserved keywords.
//should be meaningful and descriptive names.
// cannot start with a number : 1name
// cannot contain space of hyped, but can use underscore
//better to use camelCase
// var names are case sensitive.

const interestRate = 0.3;
// error :
// interestRate = 1;
console.log(interestRate * 18.23);

//primtive types in javascript  -> value types; strings,numbers,boolean,undeifned ,null
// reference types

//string literal
let name2 = "Mosh2";
let age = 20;
let isApproved = true;
let firstName = null; //explicitly clear the value of the varibale
let selectedColor = undefined;

//dynamicn typing
//js is a dynamic typed programming languaage
// types of the variables can be changed at runtime

// typeof a variable
console.log(typeof name2);
name2 = 123;
console.log(typeof name2);
console.log(typeof 123.22, typeof 12312);
console.log(typeof "undefined", typeof firstName, typeof selectedColor);

//Objects
// reference types : Object,Array and Functions

// Object are like key-value maps
const personObject = {
  name: "mosh",
  age: 123,
};

//dot notation
console.log(personObject.name);
console.log(parseInt(personObject.age) + 1);

//or use brakcets based
console.log(personObject["name"] + "es");

//arrays
//list of obejcts and things to store things together.

let selectedColors = ["red", "green", "orange"];
//array literal taking an array literal
console.log(selectedColors);
console.log(selectedColors[2]);

//get the length of the array
console.log(selectedColors.length);

//functions
// set of stmts that calucalte a thing and return thign

function greet(name) {
    //name is the parameter given to this function
  console.log(`Return a greeting ${name}`);
}

greet('abc');
