
# Real-Time Chat Application

A real-time chat application built with **Socket.io** and **Node.js**. This app allows users to create chat rooms, join or leave existing rooms, select rooms for communication, and experience live typing indicators for a seamless and interactive chat experience.

---

## Features

- **Room Management**: Create and join chat rooms dynamically.
- **Real-Time Messaging**: Instant message delivery using Socket.io.
- **Live Typing Indicators**: See when someone is typing in real time.
- **User-Friendly Interface**: Simple and intuitive design for easy navigation.
- **Scalable**: Designed to handle multiple users and chat rooms efficiently.

---

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v14+)
- **npm** (Node Package Manager)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Usage

1. Open the app in your browser.
2. Create a chat room or join an existing one.
3. Start chatting in real-time with others in the same room.
4. See live typing notifications when other users are typing.

---

## File Structure

```
chat-app/
├── public/         # Static assets (HTML, CSS, JS)
├── src/
│   ├── index.js    # Main server file
│   ├── sockets.js  # Socket.io events and logic
├── package.json    # Dependencies and scripts
├── README.md       # Project documentation
```

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Real-Time Communication**: Socket.io
- **Frontend**: HTML, CSS, JavaScript

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [Socket.io](https://socket.io/)
- [Express.js](https://expressjs.com/)
