/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
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
import App2 from "./App2";

// let singleTodo = {
//   title: "todo",
//   description: "todo descp",
//   id: 0,
// };

// can't update state variable like this
// setInterval(() => {
//   singleTodo.title = String(Math.random() * 1000);
//   console.log(singleTodo);
// }, 1000);

let multitodos = [
  {
    title: "Go to gym",
    description: "Hit the gym from 7-9",
    id: 1,
  },
  {
    title: "Go to gym X2",
    description: "Hit the gym from 6-8",
    id: 2,
  },
];

// function PersonName() {
//   return (
//     <div>
//       By @ <em>sagnikc</em>
//     </div>
//   );
// }

// function PersonNameProps(props) {
//   return (
//     <div>
//       <em>
//         {props.first_name} {props.last_name}
//       </em>
//     </div>
//   );
// }

function Todo(props) {
  return (
    <div style={{ backgroundColor: "gray", padding: "2rem",}}>
      {props.title}
      {props.description}
    </div>
  );
}


function App() {
  // react knows that this is part of react's state and this is what
  // react needs to keep track of.
  // these are called as state variables
  // const [todo, setTodo] = useState({ ...singleTodo });

  // now also cant mutate it
  // setInterval(() => {
  //   setTodo({
  //     ...todo,
  //     title: String(Math.random() * 1000),
  //   });
  // },7000);
  // setTodo({
  //   ...todo,
  //   title: String("1"),
  // });

  const [todos, setTodos] = useState(multitodos);

  return (
    // <>
    //   <h2>hi there</h2>
    //   <h3>{todo.title}</h3>
    //   <h2>{todo.description}</h2>
    //   <div>
    //     Todo Count : <em>{todo.id}</em>
    //   </div>
    //   <PersonName />
    //   <PersonNameProps first_name={"sagnik"} last_name={"chatterjee"} />
    // </>
    <>
      <div>{JSON.stringify(multitodos)}</div>
      <div>
        <h2>Render todos using map</h2>
        {
          //write Javascript like this inside of react
          todos.map((todo) => {
            return (
              // <div>
              //   {todo.title}
              //   {todo.description}
              //   <h3>Goal : {todo.id}</h3>
              // </div>
              <Todo title={todo.title} description={todo.description} />
            );
          })
        }
        {/* <App2 /> */}
      </div>
    </>
  );
}

export default App;
