import "./App.css";
import AppBar from "./AppBar";
import Signin from "./Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";

function App() {
  return (
    <>
      <div
        style={{ width: "100vw", height: "100vh", backgroundColor: "#e5e5e5" }}
      >
        <AppBar />

        <Router>
          <Routes>
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
