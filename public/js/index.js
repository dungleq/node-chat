const io=require ('socket.io');
var socket = io();
socket.on ('connect', function () {
  console.log('connected to chat room');
});
socket.on('newMessage', function (message) {
  console.log('New message:',message);
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});
