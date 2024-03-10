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
    <>
      <div>
        <SignUp />
      </div>
    </>
  );
}

export default App;
