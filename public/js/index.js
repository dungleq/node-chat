var socket = io();
socket.on ('connect', function () {
  });
socket.on('newMessage', function (message) {
  console.log('New message:',message);
});

socket.emit('createMessage', {
  from:'Danny',
  text: 'hello'
}, function (data) {
  console.log(data)
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});
