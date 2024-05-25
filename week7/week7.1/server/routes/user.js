//logic for normal user access
import express from "express";
import { authenticateJWT, SECRET } from "../middleware/auth";
import { User, Course, Admin } from "../db";
import jwt from "jsonwebtoken";

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
