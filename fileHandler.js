const fs = require("fs");
let data = [];
function readFromMoviesFile() {
  fs.readFile("movies.json", "utf-8", (err, data) => {
        if (err) {
            console.log("Error Reading The File!");
        } else {
            console.log("\n############\nResult\n");
            console.log(data);
            console.log("\n############\n");
        }
    });
}

function writeOnMoviesFile(data) {
  fs.writeFile("movies.json", JSON.stringify(data), (err) => {
    if (err) {
      console.log("Error Writing On File!");
    } else {
        console.log("\nDone!\n")
    }
  });
}

module.exports = {
  readFromMoviesFile,
  writeOnMoviesFile,
};
