// Database Connection (config/db.js)

const mongoose = require("mongoose");

const conectDB = async () => {
  try {
    console.log("Contecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Contected MongoDB...");
  } catch (error) {
    console.log("MongoDB Conection Failed:", error.message);
    process.exit(1);
  }
};
module.exports = conectDB;
