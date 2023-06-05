const fH = require("./fileHandler");
class Movies {
  constructor(title, year, director, genre) {
    this.title = title;
    this.year = year;
    this.director = director;
    this.genre = genre;
  }
}

function addMovie(title, year, director, genre) {
  var movie = new Movies(title, year, director, genre);
  fH.writeOnMoviesFile(movie);
}



module.exports = {
    addMovie,
}