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
