/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import useTodos from "./useTodos";

function App() {
  //state change will lead to re-render of code
  //happens only once inside the code.
 
  //using our own hook
  const todos = useTodos();
  

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
