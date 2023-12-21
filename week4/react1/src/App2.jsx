import { useState } from "react";

function App2() {
  const [todoForToday, setTodoForToday] = useState({
    title: "go to gym",
    description: "hit gym from 7-9",
    id: 1,
  });

  console.log("render");

  setTimeout(() => {
    setTodoForToday({
      title: "Go to place x " + Math.floor(Math.random() * 10),
      description: `Going to place ${Math.random(Math.random * 10)}`,
      id: Math.floor(Math.random() * 10),
    });
  }, 10000);

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
