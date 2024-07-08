const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
console.log(`New client connected: ${socket.id}`);//new client connected, allowing socket to send msgs to teh joined room

// Join a room
//EVENT HANDLER
socket.on('joinRoom', (room) => {
socket.join(room); //creating the join to the room
console.log(`${socket.id} joined room ${room}`);
});

// Send a message to all clients in a room 
//EVENT HANDLER
socket.on('sendToRoom', ({ room, message }) => {
io.to(room).emit('message', message);
});

socket.on('disconnect', () => {
console.log('Client disconnected');
});
});

server.listen(4000, () => console.log('Server is running on port 4000'));

/* 
socket.io for msgs to be sent between two or more ppl, they need to join a socket 
STEPS

1. Only show chats that the user has joined (only when we have the db)
2. If chats display correctly (db fetch all user events)
3. When enter chat is clicked and user goes to the room 
a.client aspect: socket.io  needs to emit a msg to server to join that event room (socket.send), as well as any msgs need to be sent using room id + msg
b.server: using socket.io it needs to have 2 socket event handlers (join and send to room event handlers)
*/