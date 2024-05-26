import mongoose from "mongoose";
import express from "express";
import { User, Course, Admin } from "../db";
import jwt from "jsonwebtoken";
import { SECRET, authenticateJWT } from "../middleware/auth";

const router = express.Router();

//santy check for admin existing or  not
router.get("/me", authenticateJWT, async (req, res) => {
  const admin = await Admin.findOne({
    username: req.user.username,
  });

  if (!admin) {
    req.statusCode(403).json({ msg: "Admin does not exist !!" });
    return;
  } //setup new admin
  res.json({
    username: admin.username,
  });
});

//post route for new admin signup
router.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const findAdmin = (admin) => {
    if (admin) {
      res.status(403).json({
        message: "Admin already exists !",
      });
    } else {
      const obj = { username: username, password: password };
      const newAdmin = new Admin(obj);
      newAdmin.save();

      const token = jwt.sign(
        {
          username,
          role: "admin",
        },
        SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.json({
        message: "Admin created successfully!",
        token,
      });
    }
  };
  Admin.findOne({ username }).then(findAdmin);
});

//login
router.post("/login", async (req, res) => {
  const { username, password } = req.headers;
  const admin = await Admin.findOne({ username, password });
  if (admin) {
    const token = jwt.sign({ username, role: "admin" }, SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

router.post("/courses", authenticateJWT, async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json({ message: "Course created successfully", courseId: course.id });
});

router.put("/courses/:courseId", authenticateJWT, async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, {
    new: true,
  });
  if (course) {
    res.json({ message: "Course updated successfully" });
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

router.get("/courses", authenticateJWT, async (req, res) => {
  const courses = await Course.find({});
  res.json({ courses });
});

router.get("/course/:courseId", authenticateJWT, async (req, res) => {
  const courseId = req.params.courseId;
  const course = await Course.findById(courseId);
  res.json({ course });
});

export { router };
