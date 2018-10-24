const fs = require("fs");
const file = "mobydick.txt";
const stopWords = "stop-words.txt";

//read stop-words.txt file and assign it to a variable
let badWordz = fs.readFileSync(stopWords, "utf8");
//Split badWordz into a string, using the space as a separator, used 900 as an arbitrary limit of words
badWordz = badWordz.split(" ", 900);

// read Moby Dick text file from current directory
fs.readFile(file, "utf8", function(err, data) {
  if (err) throw err;
  return removeStopWordsFromArray(badWordz, data);
});

function isArray(test) {
  return Array.isArray(test);
}

function isString(test) {
  return typeof test === "string";
}

// lists final frequently-recurring words, sorted by frequency
function splitByWords(text) {
  // split string by spaces (including spaces, tabs, and newlines)
  let wordsArray = text.split(/\s+/).map(function(word) {
    return word.toLowerCase();
    //new variable with properly split text, dropped to lowercase
  });
  return wordsArray;
}

function createWordMap(wordsArray) {
  // create map for word counts
  let wordsMap = {};

  wordsArray.forEach(function(key) {
    if (wordsMap.hasOwnProperty(key)) {
      wordsMap[key]++;
    } else {
      wordsMap[key] = 1;
    }
  });
  delete wordsMap[""];
  return wordsMap;
}

function sortByCount(wordsMap) {
  // sort by count in descending order
  let finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(function(key) {
    return {
      name: key,
      total: wordsMap[key]
    };
  });

  finalWordsArray.sort(function(a, b) {
    return b.total - a.total;
  });

  return finalWordsArray;
}
