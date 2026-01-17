// MIDDLEWARE & GLOBAL ERROR HANDLER
// Error Handler Middleware

// const errorHandler = (err, req, res, next) => {
//   console.error("🔥 Error Middleware Triggered");
//   console.error(err.stack);

//   res.status(err.status || 500).json({
//     success: false,
//     message: err.message || "Server Error",
//   });
// };
// module.experts = errorHandler;

module.exports = (err, req, res, next) => {
  console.error('Error Middleware Triggered');
  console.error(err.stack);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Server Error',
  });
};
