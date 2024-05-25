/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import { Card, Typography, Button } from "@mui/material";

//using context api for prop drilling
const CountContext = createContext();

const App = () => {
  const [count, setCount] = useState(0);

  return (
    //similar to us doing useState but helps in providing only things that are required 
    // useState for the global level.
    
    <CountContext.Provider
      value={{
        count: count,
        setCount: setCount,
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ padding: 20, width: 500 }}>
          <Typography>welcome to the counter game</Typography>
          <br />
          <Buttons count={count} setCount={setCount} />
          <CountComponent count={count} />
        </Card>
      </div>
    </CountContext.Provider>
  );
};

const Buttons = ({ count, setCount }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Increase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
    </div>
  );
};

const Increase = ({ count, setCount }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="container"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </Button>
    </div>
  );
};

const Decrease = ({ count, setCount }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="container"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </Button>
    </div>
  );
};

export default App;
