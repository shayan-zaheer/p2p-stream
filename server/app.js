const express = require("express");
const { Server } = require("socket.io");
const app = express();
const io = new Server();

app.use(express.json());

io.on("connection", socket => {
    
});

app.listen(8000, () => {
    console.log("Server running at port 8000!");
})

io.listen(8001);