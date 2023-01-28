const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const {Server } = require("socket.io");
app.use(cors());
const server = http.createServer(app);
const os = require("os-utils");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET","POST"]
  }
});

let tick = 0;

// Listin for socket connections
io.on("connection", (socket) => {
  console.log(`user connected: ${socket.id}`);

  // emit cpu event
  setInterval(() => {
    os.cpuUsage((value) => {
      socket.emit("cpu", {
        value,
        name: tick++
      })
    })
  }, 1000);
  
  // emit car model event
  const models = [{"make":"Mercedes-Benz","model":"C-Class","variant":"C180","count":569},{"make":"Mercedes-Benz","model":"C-Class","variant":"C200","count":588},{"make":"Mercedes-Benz","model":"C-Class","variant":"C220","count":303},{"make":"Mercedes-Benz","model":"C-Class","variant":"C230","count":10},{"make":"Mercedes-Benz","model":"C-Class","variant":"C240","count":5},{"make":"Mercedes-Benz","model":"C-Class","variant":"C250","count":105},{"make":"Mercedes-Benz","model":"C-Class","variant":"C270","count":4},{"make":"Mercedes-Benz","model":"C-Class","variant":"C280","count":15},{"make":"Mercedes-Benz","model":"C-Class","variant":"C300","count":57},{"make":"Mercedes-Benz","model":"C-Class","variant":"C32","count":3},{"make":"Mercedes-Benz","model":"C-Class","variant":"C320","count":13},{"make":"Mercedes-Benz","model":"C-Class","variant":"C350","count":13},{"make":"Mercedes-Benz","model":"C-Class","variant":"C55","count":3},{"make":"Mercedes-Benz","model":"C-Class","variant":"C63","count":38}];
  setInterval(() => {
    if (models.length !== 0) {
      const {variant, make, model, count} = models.pop();
      socket.emit("models", {
        name: variant,
        details: `Make: ${make}, Model: ${model}, Count: ${count}`
      })
    }
  }, 3000);


  socket.on("send_model", model => {
     console.log(model);
     socket.broadcast.emit("models", {
      name: model,
      details: `Make: Mercedes-Benz, Model: ${model}, Count: ${Math.floor(Math.random() * 100)}`
    })
  })
})


server.listen(3001, () => {
  console.log("backend running")
})

