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

 
  return (
    <>
      <div>
        {todoState.map((item) => {
          return (
            <div key={item.id}>
              <h3>Title</h3>  {item.title}
              <br />
              <h3>Description</h3> {item.descp}
              <br />
              <h3>Id</h3> {item.id}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
