type PersonSexualOrientation = "straight" | "gay" | "lesbian" | "asexual";

type PersonInterface = {
  name: string;
  age: number;
  orientation: PersonInterface;
};

// cannot use types to extend a class; can create a instace of that type and pass into funciton though!

function greet(person: PersonInterface): string {
  return `Hi Mr ${person.name} , you are ${person.age} !!!`;
}

//console.log(greet({ name: "Mohammed", age: 12 }));

interface Circle {
  radius: number;
  //optional property in ts 
  borderWidth?: number;
}

interface Square {
  edge: number;
}

interface Rectangle {
  width: number;
  height: number;
}

// or types ; one of these three
type Shape = Circle | Square | Rectangle;

function renderShape(shape: Shape) {
  console.log(`shape!`);
}

function calculateArea(shape: Shape) {
  console.log("calc area");
}

// union types; need the assocation of all the types.
type UnionShape = Circle & Square & Rectangle;
