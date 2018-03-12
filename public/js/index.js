var socket = io();
socket.on ('connect', function () {
  console.log('connected to chat room');
});
socket.on('newMessage', function (message) {
  console.log('New message:',message);
});

socket.emit('createMessage', {
  to: 'Everyone',
  text: 'Glad to be in the room',
  createAt: 456
});
socket.on('disconnect', function () {
  console.log('disconnected from server');
});
