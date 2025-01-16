const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
// const mongoose = require("mongoose");
const path = require("path");
// require("dotenv").config();
require("dotenv").config();
// Import routes
const chatRoute = require("../routes/chat");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Set up Handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views"));

// Serve static files
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use chat route
app.use("/", chatRoute);

// Set up WebSocket
io.on("connection", (socket) => {
  console.log("A user connected");

  // Listen for chat messages
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg); // Send the message to all connected clients
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start the server
const PORT = process.env.PORT || 2000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
