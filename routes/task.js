const express = require("express");
const Task = require("../models/task");

const router = express.Router();

router.get("/:taskId", async (req, res) => {
  const { taskId } = req.params;
  //find task
  const task = await Task.findOne({});
  // Invalid Id supplied
  if (!task)
    return res.status(404).json({
      code: 404,
      type: "string",
      message: "Task not found"
    });
  res.status(200).send(task);
});

router.put("/:taskId", async (req, res) => {});

router.delete("/:taskId", async (req, res) => {});

router.post("/:taskId/assignTo", async (req, res) => {});

router.post("/:taskId/finish", async (req, res) => {});

router.post("/:taskId/:email", async (req, res) => {});

module.exports = router;
