const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function() {
  return this.films.map((film) => {
    return film.title;
  });
};

Cinema.prototype.filmByTitle = function(title) {
  return this.films.filter((film) => {
    return film.title === title;
  });
};

Cinema.prototype.filmsByGenre = function(genre) {
  return this.films.filter((film) => {
    return film.genre === genre;
  });
};

Cinema.prototype.filmsByYear = function(year) {
  return this.films.filter((film) => {
    return film.year === year;
  });
};

Cinema.prototype.filmsByProperty = function(property, value) {
    return this.films.filter((film) => {
        return film[property] === value;
      });
    };

// Cinema.prototype.filmsThatYearBoolean = function (films, year) {
//   let filmThere = function (film) {
//     return film.year === year;
//   };
//   return films.some(filmThere);
// };

Cinema.prototype.filmsThatYearBoolean = function (year) {
  return this.films.some((film) => {
    return film.year === year;
  })

};

// Cinema.prototype.allFilmsOverLength = function (films, length) {
//   let filmLength = function (film) {
//     return film.length > length;
//   };
//   return films.every(filmLength);
// };

Cinema.prototype.allFilmsOverLength = function (length) {
  return this.films.every((film) => {
    return film.length >= length;
  });
};

Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  }, 0);
};



module.exports = Cinema;
