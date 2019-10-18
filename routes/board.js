const express = require("express");
const Board = require("../models/board");

const router = express.Router();

router.post("/", async (req, res) => {});

router.get("/", async (req, res) => {});

router.get("/:urlAlias", async (req, res) => {
  const { urlAlias } = req.params;
  //if (!urlAlias) return res.status();
  const board = await Board.findOne({ urlAlias });
  if (!board)
    return res.status(404).json({
      code: 404,
      type: "string",
      message: "Board not found"
    });
  res.status(200).send(board);
});

router.put("/:urlAlias", async (req, res) => {
  const { urlAlias } = req.params;
  const { duration } = req.body;
  //if (!urlAlias) return res.status();
  const board = await Board.findOne({ urlAlias });
  //This user is unauthorized to change
  //Validation exception
  if (!board)
    return res.status(404).json({
      code: 404,
      type: "string",
      message: "Board not found"
    });
  if (board.status === "Doing")
    return res.status(406).json({
      code: 406,
      type: "string",
      message: "Board can not change in Doing status"
    });
  if (duration) {
    board.duration = duration;
    board.startTime = Date.now();
    //board.endTime = Date.now() + duration;
  }
});

router.delete("/:urlAlias", async (req, res) => {
  const { urlAlias } = req.params;
  //if (!urlAlias) return res.status();
  const board = await Board.findOneAndRemove({ urlAlias });
  if (!board)
    return res.status(404).json({
      code: 404,
      type: "string",
      message: "Board not found"
    });
  //This user is unauthorized to delete
  res.status(200).json({
    code: 200,
    type: "string",
    message: "successful operation"
  });
});

router.get("/finishTime", async (req, res) => {});

router.post("/:urlAlias/task", async (req, res) => {});

router.get("/:urlAlias/findByStatus", async (req, res) => {
  const { status } = req.body;
  const { urlAlias } = req.params;
  const board = await Board.findOne({ urlAlias });
  //find Task
  if (!["ToDo", "Doing", "Done"].includes(status))
    return res.status(400).json({
      code: 400,
      type: "string",
      message: "Invalid status value"
    });
});

router.get("/:urlAlias/user", async (req, res) => {});

module.exports = router;
