/* eslint-disable no-unused-vars */
import SignUp from "./components/SignUp";

/* eslint-disable react/prop-types */
function TodoApp(props) {
  return (
    <div>
      Todo item
      <h2>{props.text}</h2>
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0a0a0a",
      }}
    >
      <SignUp />
    </div>
  );
}

export default App;
