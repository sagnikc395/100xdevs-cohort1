import "./App.css";
import AppBar from "./AppBar";
import Signin from "./Signin";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import AddCourses from "./AddCourses";
import Courses from './Courses';

function App() {
  return (
    <>
      <div
        style={{ width: "100vw", height: "100vh", backgroundColor: "#e5e5e5" }}
      >
        <AppBar />

        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addcourse" element={<AddCourses />} />
          <Route path="/course" element={<Courses />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
