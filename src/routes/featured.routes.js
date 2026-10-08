const express = require("express");
const service = require("../services/featured.service");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(service.getFeatured());
});

module.exports = router;