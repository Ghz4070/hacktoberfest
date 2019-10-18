const express = require("express");
const mongoose = require("mongoose");

const user = require("./routes/user");
const board = require("./routes/board");
const task = require("./routes/task");

const app = express();

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose
  .connect("mongodb://localhost:27017/hamed", {
    useNewUrlParser: true,
    authSource: "admin",
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected To MongoDb"))
  .catch(() => console.error("Could not Connect To MongoDb"));

app.use(express.json());
app.use(cookieParser());

app.use("/user", user);
app.use("/board", board);
app.use("/task", task);

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Our Application is running on port ${port} ....`)
);
