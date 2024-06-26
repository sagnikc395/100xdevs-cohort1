const express = require("express");
const app = express();

let ADMINS = [];
let USERS = [];
let COURSES = [];

const adminAuthentication = (req, res, next) => {
  //get username and password details from headers
  const { username, password } = req.headers;
  const admin = ADMINS.find(
    (a) => a.username === username && a.password === password
  );
  if (admin) {
    next();
  } else {
    res.status(403).json({
      message: "Admin authentication failed",
    });
  }
};

app.useExpress.json();

//routes

app.post("/admin/courses", (req, res) => {
  //logic to create a course
});

app.put("/admin/courses/:courseId", (req, res) => {
  //logic to edit a course
});

app.get("/admin/courses", (req, res) => {
  //logic to get all courses
});

//user routes
app.post("/users/signup", (req, res) => {
  //logic to sign up a user
});

app.post("/users/login", (req, res) => {
  //logic to log in user
});

app.get("/users/courses", (req, res) => {
  //logic to test all courses
});

app.post("/users/courses/:courseId", (req, res) => {
  //logic to purchase a course
});

app.get("/users/purchasedCourse", (req, res) => {
  //logic to view the purchases courses
});

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
