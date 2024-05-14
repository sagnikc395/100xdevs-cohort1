import { useState } from "react";

function App() {
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

  setInterval(() => {
    setTodoState({
      title: "go to gym please please" + Math.random(),
      descp: "hit ym from 7-9",
      id: 1,
    });
  }, 10000);

  return (
    <>
      <div>
        {todoState.map((item) => {
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
