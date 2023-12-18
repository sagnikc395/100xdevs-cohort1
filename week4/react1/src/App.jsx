// let todos = [
//   {
//     title: "go to gym",
//     description: "go to gym1",
//     id: 1,
//   },
//   {
//     title: "go eat food",
//     description: "go eat food",
//     id: 2,
//   },
// ];

import { useState } from "react";

let singleTodo = {
  title: "todo",
  description: "todo descp",
  id: 0,
};

// can't update state variable like this
// setInterval(() => {
//   singleTodo.title = String(Math.random() * 1000);
//   console.log(singleTodo);
// }, 1000);

function PersonName() {
  return (
    <div>
      By @ <em>sagnikc</em>
    </div>
  );
}

function App() {
  // react knows that this is part of react's state and this is what
  // react needs to keep track of.
  const [todo, setTodo] = useState({ ...singleTodo });

  // now also cant mutate it
  setInterval(() => {
    setTodo({
      ...todo,
      title: String(Math.random() * 1000),
    });
  }, 5000);

  return (
    <>
      <h2>hi there</h2>
      <h3>{todo.title}</h3>
      <h2>{todo.description}</h2>
      <div>
        Todo Count : <em>{todo.id}</em>
      </div>
      <PersonName />
    </>
  );
}

export default App;
