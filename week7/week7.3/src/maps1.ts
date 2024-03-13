interface Random {
  id: string;
  name: string;
}

//empty map
const usersMap = new Map<string, Random>();

//adding users to the map using .set
usersMap.set("asd123", { id: "asd123", name: "John Doe2" });
usersMap.set("qeqe123", { id: "jkl123", name: "John Doe3" });

//using .get
console.log(usersMap.get("asd123"));
