// Express App Setup (app.js)

const express = require("express");
const todoRoutes = require("./routes/todo.routes");

const app = express(); // This must be an express instance

console.log("Initializing Express App...");
app.use(express.json());
console.log("JSON Middleware Enabled");
app.get("/", (req, res) => {
  console.log("GET / Request");
  res.send("API Running...");
});
app.use("/api/todos", todoRoutes);
console.log("/api/todos routes connected");

module.exports = app; // directly export the app
