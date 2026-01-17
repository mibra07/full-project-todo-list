// MIDDLEWARE & GLOBAL ERROR HANDLER
// Request Logger Middleware

const requestLogger = (req, res, next) => {
  console.log(`${req.method} - ${req.originalUrl}`);
  console.log("Body", req.body);
  next();
};
module.exports = requestLogger;

// module.exports = (req, res, next) => {
//   console.log(`${req.method} - ${req.originalUrl}`);
//   console.log("Body", req.body);
//   next();
// };
