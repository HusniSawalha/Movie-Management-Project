const fH = require("./fileHandler");
var allMovies = [];
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
  allMovies.push(movie)
  fH.writeOnMoviesFile(allMovies);
}

function searchMovieByTitle(search){
    console.log(Movies.filter((task) => task.completed === completed));
}
function searchMovieByDirector(search){

}
function searchMovieByYear(search){

}
function searchMovieByGenre(search){

}


module.exports = {
    addMovie,
    searchMovieByTitle,
    searchMovieByDirector,
    searchMovieByYear,
    searchMovieByGenre,
}