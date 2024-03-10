/* eslint-disable no-unused-vars */
import AppBar from "./components/AppBar";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0a0a0a",
        color: "#fafafa",
      }}
    >
      <AppBar />
      <SignUp />
    </div>
  );
}

export default App;
