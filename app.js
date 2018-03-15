var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

//Whenever someone connects
io.on('connection', function(socket) {
   console.log('A user connected');

   //Whenever someone disconnects
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});

var port = 3000 //server port
http.listen(port, function() {
   console.log('listening on *:' + port);
});
