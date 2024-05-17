import AppBar from "./components/AppBar";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#eeeeee",
      }}
    >
      <AppBar />
      <SignUp />
    </div>
  );
}

export default App;
