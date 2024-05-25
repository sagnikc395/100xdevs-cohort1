import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleInc = () => {
    setCounter(counter + 1);
  };

  const handleDec = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <p>Welcome to the counter game</p>
      <div>
        <button onClick={handleInc}>Increase Counter</button>
        <button onClick={handleDec}>Decreaase Counter </button>
        <div>Current Value is : {counter}</div>
      </div>
    </>
  );
}

export default App;
