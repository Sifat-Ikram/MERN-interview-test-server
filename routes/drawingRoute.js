// routes/drawingRoutes.js
const express = require("express");
const { getDrawings } = require("../controller/drawingController");
const router = express.Router();

// GET /api/drawings - Get all drawings
router.get("/drawings", getDrawings);

module.exports = router;