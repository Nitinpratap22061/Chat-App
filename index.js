const { createServer } = require('http');
const express = require('express');
const { Server } = require('socket.io');
const formatMessage = require('./utils/messages');
const { userJoin, getCurrentUser,userLeave,getRoomUsers } = require('./utils/users');

const app = express();
const server = createServer(app); // Create HTTP server
const io = new Server(server); // Initialize Socket.IO server
const botName = 'ChatCord Bot';
// Set static folder
app.use(express.static('public'));

// Run when client connects
io.on('connection', (socket) => {
    console.log('New WebSocket Connection');

    socket.on('joinRoom', ({username, room}) => {

        const user = userJoin(socket.id, username, room);   // Join user to chat

        socket.join(user.room) ; 


        
        // Welcome current user
    socket.emit('message', formatMessage(botName,'Welcome to ChatCord!'));

    // Broadcast when a user connects (to everyone except the connecting user)
    socket.broadcast.to(user.room).emit('message', formatMessage(botName,`A ${user.username} has joined the chat`));



    io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)  // Send users and room info to the client;


    });

    });

    

    // Listen for chatMessage
    socket.on('chatMessage', (msg) => {
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit('message', formatMessage(user.username,msg)); // Broadcast message to all users
    });

    // Runs when client disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);
        if(user){
            io.to(user.room).emit('message', formatMessage(botName,`${user.username} has left the chat`)); // Broadcast message to all room users
        }
        
    io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)  // Send users and room info to the client;

        
    });

    });

});




// Start the server
server.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});
