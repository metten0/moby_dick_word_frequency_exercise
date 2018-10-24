const removeStopWordsFromArray = require("./readfile");

//GUIDE FOR THIS TESTING SUITE
// test1 - it's a function
// test2 - this function takes two arguments. It takes the bad words in one long format and it takes the book in the other format
// test 3 -  an empty string and an empty object should return an empty array
// test 4 - given set of bad words and a set of words should return an array of objects. So you will give it a test value of values...five words and then "a" "a" "a" "a" "in" "in" "in" "in" "in" and then you will put "in" as a bad word and it should return an array of one object where the name is "a" and the value is

test("should exist as a function", () => {
  expect(removeStopWordsFromArray).toBeDefined();
  expect(removeStopWordsFromArray).toBeFunction();
});

test("should throw an error if either parameters are not arrays", () => {
  expect(() => removeStopWordsFromArray(null, null)).toThrow(
    `removeStopWordsFromArray expected array for unwantedWordsArray and string for data, received null for unwantedWordsArray and null for data.`
  );
});

test("should return an empty array given an empty string and object", () => {
  expect(removeStopWordsFromArray([], "")).toEqual([]);
});

test("should remove Stop Words from the results", () => {
  expect(removeStopWordsFromArray(["in"], "a in a in a in")).toEqual([
    { name: "a", total: 3 }
  ]);
});
