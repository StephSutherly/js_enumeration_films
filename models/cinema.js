const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function(films) {
  const result = films.map((film) => {
    return film.title
  });
  return result
  console.log(result);
};

Cinema.prototype.filmByTitle = function(films, title) {
  const result = films.filter((film) => {
    return film.title === title;
  });
  return result;
};

Cinema.prototype.filmsByGenre = function(films, genre) {
  const result = films.filter((film) => {
    return film.genre === genre;
  });
  return result;
};

Cinema.prototype.filmsThatYearBoolean = function (films, year) {
  let filmThere = function (film) {
    return film.year === year;
  };
  return films.some(filmThere);
};

Cinema.prototype.filmsOverLength = function (films, length) {
  let filmLength = function (film) {
    return film.length > length;
  };
  return films.every(filmLength);
};

Cinema.prototype.totalRunningTime = function (films) {
  const total = films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  }, 0);
  return total;
};

module.exports = Cinema;
