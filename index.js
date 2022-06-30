const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.send("hello");
});
 
io.on("connection", (socket) => {
  console.log(socket.id);
  socket.emit("my-event",1)

});
server.listen(process.env.PORT || 3000, () => {
  console.log("listening on *:3000");
});
