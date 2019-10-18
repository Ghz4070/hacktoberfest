const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  createDate: { type: Date, default: Date.now() },
  assignedTo: { type: mongoose.Schema.Types.ObjectId },
  result: {
    Output: { description: { type: String }, file: { type: String } }
  },
  votes: [{ vote: { type: mongoose.Schema.Types.ObjectId } }],
  status: { type: String, enum: ["ToDo", "Doing", "Done"] }
});

const Task = mongoose.model("Task", taskSchema);

exports.Task = Task;
