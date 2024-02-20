type PersonInterface = {
  name: string;
  age: number;
};

// cannot use types to extend a class; can create a instace of that type and pass into funciton though!

function greet(person: PersonInterface): string {
  return `Hi Mr ${person.name} , you are ${person.age} !!!`;
}

console.log(greet({ name: "Mohammed", age: 12 }));
