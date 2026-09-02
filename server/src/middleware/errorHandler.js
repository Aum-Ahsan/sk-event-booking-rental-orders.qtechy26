export function notFoundHandler(req, res) {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.path}` });
}

export function errorHandler(error, req, res, next) {
  if (res.headersSent) return next(error);
  const status = error.status || 500;
  return res.status(status).json({
    message: status === 500 ? "Unexpected server error" : error.message,
  });
}
