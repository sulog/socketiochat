const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

console.log(__dirname)

app.get('/', (req, res) => res.sendFile(__dirname + '/Client/index.html'));

io.on('connection', function (socket) {
    io.emit('user connected', socket.id);
    socket.on('message', function (msg) {
        //socket.broadcast.emit('message',msg);
        io.emit('message', msg);
    });
});

http.listen(3000, () => console.log("listening on http://localhost:3000"));
