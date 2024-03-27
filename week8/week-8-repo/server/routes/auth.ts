import jwt from "jsonwebtoken";
import express from "express";
import { authenticateJwt, SECRET } from "../middleware/";
import { User } from "../db";
import { z } from "zod";

//zod object
const signupInput = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(8).max(50),
});

const loginInput = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

//zod object type, that we can use in the frontend
// can import using monorepos.
//dont want the backend logic in the backend and just want a type 
// to import them.
type SignUpParams = z.infer<typeof signupInput>;

const router = express.Router();

router.post("/signup", async (req, res) => {
  const parsedInput = signupInput.safeParse(req.body);
  if (!parsedInput.success) {
    return res.status(403).json({
      error: parsedInput.error,
    });
  }
  const username = parsedInput.data.username;
  const password = parsedInput.data.password;

  const user = await User.findOne({ username: parsedInput.data.username });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: "1h" });
    res.json({ message: "User created successfully", token });
  }
});

router.post("/login", async (req, res) => {
  const parsedInput = loginInput.safeParse(req.body);
  if (!parsedInput.success) {
    return res.status(403).json({
      error: parsedInput.error,
    });
  }
  const username = parsedInput.data.username;
  const password = parsedInput.data.password;

  const user = await User.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1h" });
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

router.get("/me", authenticateJwt, async (req, res) => {
  const userId = req.headers["userId"];
  const user = await User.findOne({ _id: userId });
  if (user) {
    res.json({ username: user.username });
  } else {
    res.status(403).json({ message: "User not logged in" });
  }
});

export default router;
