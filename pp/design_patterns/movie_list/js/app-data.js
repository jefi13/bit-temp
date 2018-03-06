'use strict';

// Data Module - Model
var dataModule = (function () {
    // list of all movies and list of all programs
    var data = {
        listOfMovies: [],
        listOfPrograms: []
    }

    // constructor
    function Result(index, object) {
        this.index = index;
        this.object = object;
        // this.data = data;
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

        // Push created movie to global list of movies and get it's index
        var movieIndex = data.listOfMovies.push(movie) - 1;

        var result = new Result(movieIndex, movie);
        
        return result;
    }

    function Program(date) {
        this.date = new Date(date);
        this.movieList = [];
    }

    Program.prototype.getData = function () {
        var programDuration = 0;

        this.movieList.forEach(function (movie) {
            programDuration += movie.length;
        });

        return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", " + this.movieList.length + " movies, duration: " + programDuration + "min";
    }

    function addProgram(programData) {
        var program = new Program(programData.date);

        // Push created movie to global list of movies and get it's index
        var programIndex = data.listOfPrograms.push(program) - 1;

        var result = new Result(programIndex, program);
        
        return result;
    }

    return {
        addMovie: addMovie,
        addProgram: addProgram
    }
})();