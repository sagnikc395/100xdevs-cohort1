import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AppBar from "./components/AppBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  <div
    style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#a8a29e",
    }}
  >
    <AppBar />
    <Router>
      <Routes>
        <Route path="/" elemen={<SignUp />} />
        <Route path="/login" elemen={<SignIn />} />
        <Route path="/signup" elemen={<SignUp />} />
      </Routes>
    </Router>
  </div>;
}

export default App;
