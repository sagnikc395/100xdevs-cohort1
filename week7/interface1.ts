//inlining the type inside
export function greet(person: { name: string; age: number }): string {
  return `Hello Mr ${person.name} glad that you are ${person.age} years old!`;
}

console.log(greet({ name: "Sagnik", age: 23 }));
