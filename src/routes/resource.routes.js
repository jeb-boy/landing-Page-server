const express = require("express");
const { validateRequiredFields } = require("../middleware/validation.middleware");

function createResourceRouter(service, fields) {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.json(service.getAll());
  });

  router.get("/:id", (req, res) => {
    const item = service.getById(req.params.id);

    if (!item) {
      return res.status(404).json({
        type: "https://example.com/problems/not-found",
        title: "Resource Not Found",
        status: 404,
        detail: `${service.resourceName} ${req.params.id} was not found.`
      });
    }

    res.json(item);
  });

  router.post("/", validateRequiredFields(fields), (req, res) => {
    const item = service.create(req.body);
    res.status(201).json(item);
  });

  router.put("/:id", validateRequiredFields(fields), (req, res) => {
    const item = service.update(req.params.id, req.body);

    if (!item) {
      return res.status(404).json({
        type: "https://example.com/problems/not-found",
        title: "Resource Not Found",
        status: 404,
        detail: `${service.resourceName} ${req.params.id} was not found.`
      });
    }

    res.json(item);
  });

  router.delete("/:id", (req, res) => {
    const removed = service.remove(req.params.id);

    if (!removed) {
      return res.status(404).json({
        type: "https://example.com/problems/not-found",
        title: "Resource Not Found",
        status: 404,
        detail: `${service.resourceName} ${req.params.id} was not found.`
      });
    }

    res.status(204).send();
  });

  return router;
}

module.exports = createResourceRouter;