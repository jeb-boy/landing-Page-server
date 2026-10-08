const express = require("express");
const service = require("../services/college.service");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(service.getCollege());
});

module.exports = router;