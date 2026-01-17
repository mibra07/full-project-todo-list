// Express App Setup (app.js)

const express = require("express");
const todoRoutes = require("./routes/todo.routes");
// Register Middleware
const requestLogger = require("./middleware/requestLogger");
const errorHandler = require("./middleware/errorHandler");

const app = express(); // This must be an express instance

console.log("Initializing Express App...");
app.use(express.json());
console.log("JSON Middleware Enabled");

// Register Middleware Enabled
app.use(requestLogger);
console.log("Request Logger Enabled");

app.get("/", (req, res) => {
  console.log("GET / Request");
  res.send("API Running...");
});
app.use("/api/todos", todoRoutes);
console.log("/api/todos routes connected");

// Register Middleware Enabled
app.use(errorHandler);
console.log("Global Error Handle Enabled");

module.exports = app; // directly export the app
