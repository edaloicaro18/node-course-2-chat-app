var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');  

    socket.emit('createMessage', {
        from: 'jen@example.com',
        text: 'Hey. This is Jen.'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
});

//newMessage createMessage