const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", async (req, res) => {});

router.get("/logout", auth, async (req, res) => {});

router.get("/forgetpassword", async (req, res) => {});

router.put("/forgetpassword", async (req, res) => {});
module.exports = router;
