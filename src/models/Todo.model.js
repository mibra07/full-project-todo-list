// MONGOOSE MODEL
// Todo Schema (models/Todo.model.js)

const mongoose = require("mongoose");

console.log("Defining Todo Schema");

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", TodoSchema);
