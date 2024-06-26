/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";
import { Card, Typography, Button } from "@mui/material";
import CompRecoil from "./CompRecoil";

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
          <Buttons />
          <CountComponent />
        </Card>
      </div>
      <CompRecoil />
    </CountContext.Provider>
  );
};

const Buttons = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Increase />
      <Decrease />
    </div>
  );
};

const Increase = () => {
  //stopped the problem of prop drilling, using directly the context
  // and taking them globally
  // and can take wherever we want them!
  const { count, setCount } = useContext(CountContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="contained"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </Button>
    </div>
  );
};

const Decrease = () => {
  const { count, setCount } = useContext(CountContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="contained"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </Button>
    </div>
  );
};

const CountComponent = () => {
  const { count } = useContext(CountContext);
  return (
    <div>
      <Typography variant="h5" textAlign={"center"}>
        {count}
      </Typography>
    </div>
  );
};

export default App;
