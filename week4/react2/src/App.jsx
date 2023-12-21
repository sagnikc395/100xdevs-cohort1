import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [todoForToday, setTodoForToday] = useState({
    title: "go to gym",
    description: "hit gym from 6-7",
    id: 1,
  });

  console.log("render");
  //useEffect
  useEffect(() => {
    console.log(`Hi from atlantis!`);
    setTodoForToday({
      title: `go to pizza place` + Math.random(),
      description: "pizza man from 8-9",
      id: 100,
    });
  }, []);

  // setInterval(() => {
  //   setTodoForToday({
  //     title: `go to pizza place` + Math.random(),
  //     description: "pizza man from 8-9",
  //     id: 100,
  //   });
  // }, 1000);

  return (
    <>
      <div>Hello I&apos;m under the water!!</div>
      <div>
        {todoForToday.title}
        <br />
        {todoForToday.description}
      </div>
    </>
  );
}

export default App;
