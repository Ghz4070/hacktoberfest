const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createDate: { type: Date, default: Date.now() },
  boards: [{ board: { type: mongoose.Schema.Types.ObjectId } }],
  status: { type: String, enum: ["Free", "Paid"], default: "Free" }
});

userSchema.methods.generateAuthToken = function() {};

const User = mongoose.model("User", userSchema);

exports.User = User;
