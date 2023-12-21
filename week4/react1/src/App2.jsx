import { useState } from "react";
let ctr = 0;
function App2() {
  const [todoForToday, setTodoForToday] = useState({
    title: "go to gym",
    description: "hit gym from 7-9",
    id: 1,
  });

  console.log("render");
  if (ctr == 0) {
    //only render on the first hit
    setTimeout(() => {
      setTodoForToday({
        title: "Go to place x " + Math.floor(Math.random() * 10),
        description: `Going to place ${Math.random(Math.random * 10)}`,
        id: Math.floor(Math.random() * 10),
      });
    }, 10000);
    ctr = 1;
  } else {
    console.log(`Tada not rendering anything !`);
  }

  return (
    <div>
      {todoForToday.title}
      <br />
      {todoForToday.description}
      <br />
      {todoForToday.id}
    </div>
  );
}

export default App2;
