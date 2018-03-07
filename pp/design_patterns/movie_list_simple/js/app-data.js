'use strict';

// Data Module - Model
var dataModule = (function () {
    // list of all movies
    var data = {
        listOfMovies: []
    }

    // constructor
    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    // methods
    Movie.prototype.getData = function () {
        return this.title + ', ' + this.length + 'min, ' + this.genre;
    }

    function addMovie(movieData) {
        var movie = new Movie(movieData.title, movieData.length, movieData.genre);

        // Push created movie to list of movies
        data.listOfMovies.push(movie);

        return movie;
    }

    return {
        addMovie: addMovie
    }
})();