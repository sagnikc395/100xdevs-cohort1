/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function App() {
  //state change will lead to re-render of code
  //happens only once inside the code.
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    //  console.log("hi from useEffect");
    // similarly we would put our fetch request here

    fetch("http://localhost:3000/todos", {
      method: "GET",
    }).then((res) => {
      res.json().then((data) => {
        // console.log(data);
        //update the todos
        setTodos(data);
      });
    });
    // setInterval(() => {
    //   setTodoState([
    //     {
    //       title: "Go to gym pwease",
    //       descp: "hit gym from 7-9",
    //       id: 1,
    //     },
    //   ]);
    // }, 1000);
  }, []);

  return (
    <>
      <div>
        {[...todos].map((item) => {
          //this js code , needs to return some html
          return (
            <div key={item.id}>
              <Todo title={item.title} descp={item.descp} id={item.id}/>
              <button>Delete</button>
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
      <br />
      {props.id}
    </div>
  );
}

export default App;
