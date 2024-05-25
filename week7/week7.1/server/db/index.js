//define the schema for the database here
import mongoose, { mongo } from "mongoose";

//userschema

const userSchema = new mongoose.Schema({
  username: { type: String },
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

//adminschema
const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

//coursesSchema
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

//export the models as a const
const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", userSchema);
const Course = mongoose.model("Course", userSchema);

export { User, Admin, Course };
