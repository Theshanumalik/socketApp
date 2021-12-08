const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);
app.use(express.static('frontend'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frontend/index.html');
});

io.on('connection', (socket) => {
    socket.broadcast.emit('user-connected', "New user connected")
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        socket.broadcast.emit('messege', msg);
    });
  socket.on('disconnect', ()=>{
      console.log('a user is disconnected');
  } )
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});