// controllers/drawingController.js
const Drawing = require("../model/whiteboard");

// Fetch all drawings
const getDrawings = async (req, res) => {
  try {
    const drawings = await Drawing.find();
    res.status(200).json(drawings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDrawings,
};