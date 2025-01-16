const socket = io();

// Send message using socket.io
document.getElementById("send-socket-message").addEventListener("click", () => {
  const username = document.getElementById("socket-username").value;
  const message = document.getElementById("socket-message").value;

  if (username && message) {
    socket.emit("chat message", { username, text: message });
    document.getElementById("socket-message").value = ""; // Clear the input
  }
});

// Listen for incoming messages and append them to the chat
socket.on("chat message", (msg) => {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.innerHTML = `<strong>${msg.username}</strong>: ${msg.text}`;
  document.querySelector(".messages").appendChild(messageElement);
});
