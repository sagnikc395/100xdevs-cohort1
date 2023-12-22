import "./App.css";
import AppBar from "./AppBar";
import Signup from "./Signup";

function App() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh", backgroundColor: "#e5e5e5" }}>
        <AppBar />
        <Signup />
      </div>
    </>
  );
}

export default App;
