const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//code to run ion server on connection
io.on("connection", (socket) => {
  console.log("a user connected");
  //code to run on disconnection
  socket.on("disconnect", () => {
    console.log(`user disconnected`);
  });
});

server.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
