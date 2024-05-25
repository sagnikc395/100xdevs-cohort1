//logic for normal user access
import express from "express";
import { authenticateJWT, SECRET } from "../middleware/auth";
import { User, Course, Admin } from "../db";
import jwt from "jsonwebtoken";
import fs from "fs";

const router = express.Router();

//post handler for new signup
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  //db fetch is async
  const user = await User.findOne({ username });
  if (user) {
    //can't signup user as this, as already exists
    req.status(403).json({
      message: "User already exists ! can't signup",
    });
  } else {
    const newUser = new User({ username, password });
    //save to db
    await newUser.save();
    //generate new token for the user
    const token = jwt.sign({ username, role: "user" }, SECRET, {
      expiresIn: "1h",
    });
    //successly created user
    res.json({
      message: "User has been created successfully !",
      token,
    });
  }
});

//post handler for user sign in validation
router.post("/signin", async (req, res) => {
  const { username, password } = req.headers;
  //async db call
  const user = await User.findOne({ username, password });

  if (user) {
    const token = jwt.sign(
      {
        username,
        role: "user",
      },
      SECRET,
      {
        expiresIn: "1h",
      }
    );
    //log in successful!
    res.status(200).json({
      message: "Login Successful!",
    });
  } else {
    //invalid username or password
    res.status(403).json({
      message: "Invalid username or password present !",
    });
  }
});

//get all the courses for the signed in user
router.get("/courses", authenticateJWT, async (req, res) => {
  //print all the available couses for the given user
  const availCourses = await Course.find({ published: true });
  res.status(200).json({ availCourses });
});

//get all the course for the given courseId

router.get("/courses/:courseId", authenticateJWT, async (req, res) => {
  const course = await Course.findById(req.params.courseId);

  //log all queries!!!
  await fs.writeFile("./logger.json", course);

  if (course) {
    const user = await User.findOne({ username: req.user.username });
    if (user) {
      //add to our db
      user.purchasedCourses.push(course);
      //save transaction
      await user.save();
      res.json({
        message: "Course purchased successfully!",
      });
    } else {
      //user not found !
      res.status(403).json({ message: "User not found" });
    }
  } else {
    //course not found
    res.status(404).json({ message: " Course not found !" });
  }
});

//get all the purchased courses for the given user
router.get("/purchasedCourses", authenticateJWT, async (req, res) => {
  const user = await User.findOne({
    username: req.user.username,
  }).populate("purchasedCourses");

  if (user) {
    res.json({
      purchasedCourses: user.purchasedCourses || [],
    });
  } else {
    //user not found !
    res.status(403).json({
      message: "User not found !",
    });
  }
});
