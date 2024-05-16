"use strict";

var express = require("express");
var http = require("http");
var socketIo = require("socket.io");
var cors = require("cors");
var mongoose = require("mongoose");
var dotenv = require("dotenv");
var authRoutes = require("../api/auth"); //	"proxy": "http://localhost:5000",

dotenv.config();

var app = express();

var server = http.createServer(app);

var io = socketIo(server, {
	cors: {
		origin: process.env.CLIENT_URL,
		methods: ["GET", "POST"],
	},
});

app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true,
	})
);

app.use(express.json());

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(function () {
		return console.log("MongoDB connected");
	})
	["catch"](function (err) {
		return console.log(err);
	});

app.use("/api/auth", authRoutes);

io.on("connection", function (socket) {
	console.log("a user connected");
	socket.on("disconnect", function () {
		console.log("user disconnected");
	});

	socket.on("drawing", function (data) {
		socket.broadcast.emit("drawing", data);
	});
});

var PORT = process.env.PORT || 3001;
server.listen(PORT, function () {
	console.log("Server running on port ".concat(PORT));
});
