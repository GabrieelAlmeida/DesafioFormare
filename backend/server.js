
const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const io = socketio(server);



//Connecting DB;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/formare', {useNewUrlParser: true, useUnifiedTopology: true});

//Importing All Models;
requireDir('./src/models/');

//Using Routes;
app.use('/api', require('./src/routes'));

io.on('connection', (socket) =>{
    console.log('We have a new connection!');

    socket.on('disconnect', () =>{
        console.log('User had left!');
    });
});





server.listen(3001);