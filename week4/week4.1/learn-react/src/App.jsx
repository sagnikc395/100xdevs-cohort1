/* eslint-disable react/prop-types */
// const todos = [
//   {
//     title: "go to gym",
//     description: "go to gym from home",
//     id: 1,
//   },
//   {
//     title: "go to home",
//     description: "go to home from gym",
//     id: 2,
//   },
// ];

import { useState } from "react";

const todo = {
  title: "go to gym",
  description: "go to gym from home",
  id: 1,
};

function App() {
  const [todo, setTodo] = useState({
    title: "init",
    description: "this starts the action",
    id: 0,
  });

  setInterval(() => {
    setTodo({
      title: "go eat something",
      description: " eat food",
      id: Math.random() * 100,
    });
  }, 7000);

  return (
    <>
      <h1>Hi there</h1>
      <div>
        {todo.id}
        <br />
        {todo.description}
        <br />
        {todo.title}
        <br />
      </div>
      <PersonName firstName={"sagnik"} lastName={"chatterjee"} />
    </>
  );
}

function PersonName(props) {
  return (
    <div>
      {props.firstName}
      {props.lastName}
    </div>
  );
}

export default App;
