const express = require("express");
const filtered_words = require("./filtered_words.json");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json(filtered_words);
});

app.listen(process.env.PORT || 5000, function() {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
