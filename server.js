const express = require("express");
const filtered_words = require("./filtered_words.json");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json(filtered_words);
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
