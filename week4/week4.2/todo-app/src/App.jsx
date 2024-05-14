import { useState } from "react";

function App() {
  const [todoState, setTodoState] = useState({
    title: "",
    descp: "",
    id: 1,
  });
  setInterval(() => {
    setTodoState({
      title: "new todo" + Math.random().toString(),
      descp: "new todo descp " + Math.random().toString(),
      id: Math.random() * 100,
    });
  }, 8000);

  return (
    <>
      <div>
        {todoState.id}
        <br />
        {todoState.descp}
        <br />
        {todoState.id}
      </div>
    </>
  );
}

export default App;
