import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/courses", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "courses",
});

//start the server
app.listen(3000, () => {
  console.log(`Server started at http://localhost:3000`);
});
