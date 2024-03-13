interface User2 {
  id: string;
  name: string;
}

//primitive objects
type Users = { [key: string]: User2 };

const users: Users = {
  abc123: { id: "abc123", name: "John Doe" },
  xyz789: { id: "abc123", name: "John Doe" },
};

console.log(users["abc123"]);

//or using Record

type Users2 = Record<string,User2>;

