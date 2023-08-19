const { io } = require("../App");

const socket = () => {
  io.on("connection", (socket) => {
    console.log(socket.id, "CONECTADO!");
  });
};
module.exports = socket;
