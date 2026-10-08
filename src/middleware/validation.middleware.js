function validateRequiredFields(fields) {
  return (req, res, next) => {
    for (const field of fields) {
      if (
        req.body[field] === undefined ||
        req.body[field] === null ||
        String(req.body[field]).trim() === ""
      ) {
        return res.status(400).json({
          type: "https://example.com/problems/validation-error",
          title: "Validation Error",
          status: 400,
          detail: `The ${field} field is required.`
        });
      }
    }

    next();
  };
}

module.exports = {
  validateRequiredFields
};