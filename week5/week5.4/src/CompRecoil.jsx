/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";
import { Card, Typography, Button } from "@mui/material";
import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

const CompRecoil = () => {
  return (
    <RecoilRoot>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ padding: 20, width: 500 }}>
          <Typography>welcome to the counter game</Typography>
          <br />
          <Buttons />
          <CountComponent />
        </Card>
      </div>
    </RecoilRoot>
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
  const setCount = useSetRecoilState(countState);
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
          setCount((existing) => existing + 1);
        }}
      >
        Increase
      </Button>
    </div>
  );
};

const Decrease = () => {
  const setCount = useSetRecoilState(countState);
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
          setCount((existing) => existing - 1);
        }}
      >
        Decrease
      </Button>
    </div>
  );
};

const CountComponent = () => {
  //whenever
  const count = useRecoilValue(countState);
  return (
    <div>
      <Typography variant="h5" textAlign={"center"}>
        {count}
      </Typography>
    </div>
  );
};

const countState = atom({
  key: "countstate", //unqiue id
  default: 0, //default value for this thing
});

export default CompRecoil;
