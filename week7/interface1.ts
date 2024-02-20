//inlining the type inside
export function greet(person: { name: string; age: number }): string {
  return `Hello Mr ${person.name} glad that you are ${person.age} years old!`;
}

console.log(greet({ name: "Sagnik", age: 23 }));

interface Person {
  name: string;
  age: number;
}

export function greet2(person: Person): string {
  return `Hello ${person.name} you are late today !`;
}

console.log(
  greet2({
    name: "Sagnik",
    age: 22,
  })
);

const date = new Date();
//associated methods for the objects , associated with the object.
date.getFullYear();

//classes and interfaces

interface PersonInterface {
  name: string;
  age: number;
  greet(): void | string;
}

class Person2 implements PersonInterface {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi mr ${this.name}`;
  }
}

const personObject = new Person2("Harkirat", 123);
// this function will have the state of the name and the age.
console.log(personObject.greet());
