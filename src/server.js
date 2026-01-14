// Server Start (server.js)

require("dotenv").config(); // load .env
const app = require("./app");
const conectDB = require("./config/db");

const PORT = process.env.PORT || 3000;
const startServer = async () => {
  console.log("Starting Server... ");
  await conectDB();

  app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
  });
};

startServer();
