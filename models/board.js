const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  urlAlias: { type: String, required: true },
  visibility: { type: String, enum: ["Public", "Private"], default: "Public" },
  createDate: { type: Date },
  startTime: { type: Date },
  duration: { type: Number },
  endTime: { type: Date },
  tasks: [{ task: { type: mongoose.Schema.Types.ObjectId } }],
  status: {
    type: String,
    enum: ["ToDo", "Planning", "Doing", "Finalizing"],
    default: "ToDo"
  }
});

boardSchema.methods.generateAuthToken = function() {};

const Board = mongoose.model("Board", boardSchema);

exports.Board = Board;
