function problemDetails(type, title, status, detail) {
  return {
    type,
    title,
    status,
    detail
  };
}

function notFoundHandler(req, res) {
  res.status(404).json(
    problemDetails(
      "https://example.com/problems/not-found",
      "Resource Not Found",
      404,
      `Route ${req.method} ${req.originalUrl} was not found.`
    )
  );
}

function errorHandler(err, req, res, next) {
  console.error(err);

  const status = err.status || 500;

  res.status(status).json(
    problemDetails(
      err.type || "https://example.com/problems/internal-server-error",
      err.title || "Internal Server Error",
      status,
      err.detail || "An unexpected error occurred."
    )
  );
}

module.exports = {
  problemDetails,
  notFoundHandler,
  errorHandler
};