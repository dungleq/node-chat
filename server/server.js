const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const express = require ('express');

const publicPath = path.join(__dirname, "/../public");
const port = process.env.PORT || 3000;
var app = express();
var server =http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection', (socket) => {
  console.log('Users connected to chat room');
  socket.emit('newMessage', {
    from:'Admin@email.com',
    text: 'Welcome to the chat room!!!',
    createAt: 123
  });
  socket.on('createMessage', (newMessage)=> {
    console.log('New message from client:', newMessage);
  });
  socket.on('disconnect', ()=>{
    console.log('user disconnected');
  });

});
io.on
server.listen(port, ()=> {
  console.log(`server is up on ${port}`);
});
