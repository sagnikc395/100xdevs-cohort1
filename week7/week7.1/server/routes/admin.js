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
router.post('/signup',(req,res) => {
    
})