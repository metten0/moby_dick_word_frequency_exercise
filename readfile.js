const fs = require("fs");
const file = "mobydick.txt";
const stopWords = "stop-words.txt";

//read stop-words.txt file and assign it to a variable
let badWordz = fs.readFileSync(stopWords, "utf8");
//Split badWordz into a string, using the space as a separator, used 900 as an arbitrary limit of words
badWordz = badWordz.split(" ", 900);
