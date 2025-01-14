const chatForm = document.getElementById('chat-form'); // Fixed variable name casing
const chatMessages = document.querySelector('.chat-messages');
const socket = io();
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');
 
// Get username and room from URL
const {username,room} = Qs.parse(location.search,{
    ignoreQueryPrefix: true
});
//console.log(username,room);

// Join chatroom
socket.emit('joinRoom', {username,room});

// Get room and users
socket.on('roomUsers', ({room, users}) => {
    outputRoomName(room);
    outputUsers(users);
});

// Message from server
socket.on('message', (message) => {
    console.log(message);
     outputMessage(message);

     // Scroll down
     chatMessages.scrollTop = chatMessages.scrollHeight;

});



// Message submit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Getting the message text
    const msg = e.target.elements.msg.value; // Assuming there's an input with name="msg"

    // Emitting the message to the server
    socket.emit('chatMessage', msg); // Sending the message to the server

    // Clear input
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();

});

// Output message to DOM
function outputMessage(message) {
//    socket.on('messages' , (message) => {
//      const user = message.username;
//      const room = message.room; 
//    })

    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
        ${message.text}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
}

function outputRoomName(room){
    roomName.innerText = room;
}

function outputUsers(users){
    userList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
    `;
}
