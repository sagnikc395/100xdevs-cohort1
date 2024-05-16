/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function App() {
  //state change will lead to re-render of code
  //happens only once inside the code.
  const [todoState, setTodoState] = useState([
    {
      title: "Go to Gym",
      descp: "Hit gym from 5-7",
      id: 1,
    },
    {
      title: "Go to class",
      descp: "Go to classroom from 9-11",
      id: 2,
    },
  ]);
  const [counter, setCounter] = useState(Math.random());
  const [a, setA] = useState(1);
  let b = Math.random();
  console.log(a);
  console.log(b);
  console.log(todoState);

  useEffect(() => {
    //  console.log("hi from useEffect");
    setInterval(() => {
      setTodoState([
        {
          title: "Go to gym pwease",
          descp: "hit gym from 7-9",
          id: 1,
        },
      ]);
    }, 1000);
  }, []);

  return (
    <>
      <div>
        {[...todoState].map((item) => {
          //this js code , needs to return some html
          return (
            <div key={item.id}>
              <Todo title={item.title} descp={item.descp} />
            </div>
          );
        })}
      </div>
    </>
  );
}

function Todo(props) {
  return (
    <div style={{ background: "orange" }}>
      {props.title}
      {props.descp}
    </div>
  );
}

export default App;
