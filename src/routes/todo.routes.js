// ROUTES

// Routes (routes/todo.routes.js)

const express = require("express");
const router = express.Router();
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");

console.log("Todo Routes Loaded...");

router.post("/", createTodo);
router.get("/", getTodos);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
module.exports = router;

// const express = require("express");
// const router = express.Router();
// const {
//   createTodo,
//   getTodos,
//   updateTodo,
//   deleteTodo,
// } = require("../controllers/todo.controller");

// console.log("🛣️ Todo Routes Loaded");

// router.post("/", createTodo);
// // router.get("/", getTodos);
// // router.put("/:id", updateTodo);
// // router.delete("/:id", deleteTodo);

// module.exports = router;
