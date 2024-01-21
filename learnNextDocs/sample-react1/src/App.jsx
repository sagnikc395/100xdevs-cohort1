import { useState } from "react";

/* eslint-disable react/prop-types */
function Header({ title }) {
  return <div>{title} !!!!</div>;
}

export default function App() {
  const names = ["Ada Lovelace", "Grace Hooper", "Margaret Hamilton"];

  const [like, setLike] = useState(0);

  function onClickHandler() {
    //setLike is the only function that can update like, so
    // we have a directional flow of which event can update what
    setLike(like + 1);
  }

  return (
    <div>
      <Header title="Develop Previw Ship!!" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          onClickHandler();
        }}
      >
        Like
      </button>
      <div>{like}</div>
    </div>
  );
}
