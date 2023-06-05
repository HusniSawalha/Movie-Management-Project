const fs = require("fs");

function readFromMoviesFile() {
  fs.readFile("movies.json", "utf-8", (err, data) => {
    if (err) {
      console.log("Error!");
    } else {
      console.log(data);
    }
  });
}

function writeOnMoviesFile(data) {
  fs.appendFile("movies.json", JSON.stringify(data), (err) => {
    if (err) {
      console.log("Error Writing On File!");
    } else {
      console.log("\nDone!\n");
    }
  });
}

module.exports = {
  readFromMoviesFile,
  writeOnMoviesFile,
};
