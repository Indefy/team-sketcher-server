
# Team Sketcher Server

This repository contains the backend server for the Team Sketcher application. It is built using Node.js and Express.js and uses MongoDB for database storage.
The server contains mongoDB Integrated to store the users registered to the App.

## Features
- User authentication (login/register)
- Real-time communication with Socket.IO
- REST API for user management
- MongoDB integration

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Socket.IO
- JSON Web Tokens (JWT)
- Bcrypt.js
- dotenv

## Setup
 1. **Clone the repository:**
```
   bash
```
       git clone https://github.com/yourusername/team-sketcher-server.git
       cd team-sketcher-server

   
 1. **Install dependencies:**
```
   bash
```
    npm install
 1. ****Create a `.env` file**:**
 ```
	MONGO_URI=your_mongodb_connection_string 
    JWT_SECRET=your_jwt_secret 
    CLIENT_URL=http://localhost:3000
 ```   
## Running the Server
 4. **Start the server:**
   ```bash
    npm start
 ```
5. **The server will run on:**
```
   http://localhost:3001
```
## Project Structure
- server/
- api/
   - auth.js
- models/
   - User.js
- .env
- .gitignore
- package.json
- README.md
- server.js

## Socket.IO Integration

The server uses Socket.IO to handle real-time communication for collaborative drawing.

**Connection Handling**:

    io.on("connection", (socket) => { 
    	console.log("a user connected");
    socket.on("userJoined", (user) => { 
    // Handle user joining 
    	});
    socket.on("drawing", (data) => { 
    		socket.broadcast.emit("drawing", data); 
    	});
    socket.on("userLeft", (user) => { 
    		// Handle user leaving
    	});
    socket.on("disconnect", () => { 
    		// Handle user disconnect 
    	}); 
    });
