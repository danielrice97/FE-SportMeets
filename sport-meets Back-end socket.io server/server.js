const express = require("express"); //using the express server
const http = require("http");
const socketIo = require("socket.io"); //socket.io server/connection needs to share the reosurce with express

const app = express();
//create a server variable

const server = http.createServer(app);
//import socket.io
const io = socketIo(server); //server variable socket.io is now linked to express server, connections are different with socket.io, don't use http, use specil socket msg
//call socket.io

app.use(express.json());
//Handle a new socket connection, like listening on a server, any connection initiated by the client, handle in this .on conenction
io.on("connection", (socket) => {
  console.log("a user connected");

  //Handle receiving a message

  socket.on("message", (msg) => {
    console.log("message: " + msg);
    io.emit("message", msg); // Broadcast the message to all clients and update db
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(5550, () => {
  console.log('Server is running"');
});
