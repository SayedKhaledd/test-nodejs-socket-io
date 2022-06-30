const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.send("hello");
});
 
io.on("connect", (socket) => {
  console.log(socket.id);
});

server.listen(process.env.PORT || 3000, () => {
  console.log("listening on *:3000");
});
