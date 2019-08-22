const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
    const { user } = socket.handshake.query;
    connectedUsers[user] = socket.id;
});

mongoose.connect('mongodb+srv://omnistack:ENV['AUTH_TOKEN']@cluster0-se7nd.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

// utilizado para enviar as informações para o controller sem precisar faze os imports lá
app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;
    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);
server.listen(3333);
