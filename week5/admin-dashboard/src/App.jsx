import AppBar from "./components/AppBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCourse from "./components/AddCourse";
import Courses from "./components/AddCourse";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#eeeeee",
      }}
    >
      <BrowserRouter>
        <AppBar />

        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/addcourse"} element={<AddCourse />} />
          <Route path={"/course/:courseId"} element={<Courses />} />
          <Route path={"/courses"} element={<Courses />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
