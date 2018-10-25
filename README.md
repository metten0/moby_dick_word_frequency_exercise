# moby_dick_word_frequency_exercise

A fun exercise to calculate word frequency in the novel Moby Dick.

##Running the project
After downloading all files, simply `yarn install` dependencies. Use `yarn start` to start the server. Then simply open the index.html file in a browser and enjoy.

##Challenges
The biggest challenge in the project was a design choice. I chose to use basic html, CSS, and vanilla Javascript to build the UI/UX. Unfortunately, Node File System was required in order to read the `mobydick.txt` and `stop-words.txt` files. The Node require statement (`const fs = require("fs");`) prohibited me from importing the `readfile.js` file into the HTML and manipulating it. I overcame this challenge by creating a basic `server.js` file and using it to create a `filtered_words.json` file, basically an API. I was finally able to display the words after using JQuery to pull the json file into an html bootstrap modal.

##Thank You
I very much appreciate the opportunity to build this project. Feel free to call me at (816) 799-8697 or email to metten0@gmail.com to discuss details.
