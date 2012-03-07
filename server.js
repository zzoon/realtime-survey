  var io;

  io = require('socket.io').listen(4000);

  io.sockets.on('connection', function(socket) {
    socket.on('data-changed', function(data) {
	  console.log("data-changed received!");
      socket.broadcast.emit('data-changed', {
	  	index: data.index,
        vote: data.vote + 1
      });
    });
  });

