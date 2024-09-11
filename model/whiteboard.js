const mongoose = require("mongoose");

const lineSchema = new mongoose.Schema({
  start: { x: Number, y: Number },
  end: { x: Number, y: Number },
  color: String,
  thickness: Number,
});

const shapeSchema = new mongoose.Schema({
  type: { type: String, enum: ["circle", "rectangle"], required: true },
  position: { x: Number, y: Number },
  dimensions: { width: Number, height: Number },
  color: String,
});

const textSchema = new mongoose.Schema({
  content: String,
  position: { x: Number, y: Number },
  fontSize: Number,
  color: String,
});

const drawingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lines: [lineSchema],
    shapes: [shapeSchema],
    textAnnotations: [textSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("drawings", drawingSchema);
