const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const authRoutes = require("./api/auth");

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
	cors: {
		origin: process.env.CLIENT_URL || "*",
		methods: ["GET", "POST"],
	},
});

app.use(
	cors({
		origin: process.env.CLIENT_URL || "*",
		credentials: true,
	})
);

app.use(express.json());
app.use("/api/auth", authRoutes);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "build")));

// Catch-all route to serve React's index.html
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

let connectedUsers = [];

io.on("connection", (socket) => {
	console.log("a user connected");

	socket.on("userJoined", (user) => {
		user.id = socket.id;
		if (!connectedUsers.find((u) => u.username === user.username)) {
			connectedUsers.push(user);
		}
		io.emit("updateUsers", connectedUsers);
	});

	socket.on("drawing", (data) => {
		socket.broadcast.emit("drawing", data);
	});

	socket.on("userLeft", (user) => {
		connectedUsers = connectedUsers.filter((u) => u.username !== user.username);
		io.emit("updateUsers", connectedUsers);
	});

	socket.on("disconnect", () => {
		connectedUsers = connectedUsers.filter((user) => user.id !== socket.id);
		io.emit("updateUsers", connectedUsers);
		console.log("user disconnected");
	});
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
