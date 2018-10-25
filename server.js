const express = require("express");
const path = require("path");
const filtered_words = require("./filtered_words.json");
const cors = require("cors");

const app = express();

app.use(cors());
app.use("/assets", express.static(path.resolve(__dirname, "assets")));

app.get("/api/words", (req, res) => {
  res.status(200).json(filtered_words);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(process.env.PORT || 5000, function() {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
