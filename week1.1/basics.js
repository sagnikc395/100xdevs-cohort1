const person = [
  {
    name: "sagnik",
    age: 123,
  },
  {
    name: "sagnik1",
    age: 1231,
  },
  {
    name: "sagnik2",
    age: 1232,
  },
  {
    name: "sagnik3",
    age: 1233,
  },
];

console.log(Object.entries(person));
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(person[1]);
//arrays items can be accessed using index and are 0-indexed.
console.log(["harkirat", "raman", "sameer"][2]);

//loops
let users = ["harkirat", "sameer", "raman"];
for (let user of users) {
  console.log(` > ${user}`);
}

//for each of the users print on the screen harkirat's age is 21

for (let i = 0; i < person.length; i++) {
  console.log(`${person[i].age}`);
}

function printUsers(users) {
  for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].age}`);
  }
}

// printUsers(person);
// printUsers(person);
// printUsers(person);
// printUsers(person);
// printUsers(person);
printUsers(person);