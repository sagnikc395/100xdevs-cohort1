const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/index.html");
});

//code to run ion server on connection
io.on("connection", (socket) => {
  console.log("a user connected");
  //code to run on disconnection
  //   socket.on("disconnect", () => {
  //     console.log(`user disconnected`);
  //   });
  socket.on("chat message", (msg) => {
    io.emit(`$ > ${msg}`);
  });
});

server.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
