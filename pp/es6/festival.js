"use strict";

(function App() {

    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getData = function () {
        const firstLetter = this.name.slice(0, 1).toUpperCase();
        const lastLetter = this.name.slice(-1).toUpperCase();
        return `${firstLetter + lastLetter}`;
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }

    Movie.prototype.getData = function () {
        return `${this.title}, ${this.length}min, ${this.genre.getData()}`;
    }

    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
    }

    Program.prototype.getNumOfMovies = function () {
        return this.listOfMovies.length;
    }

    Program.prototype.getData = function () {
        let programDuration = 0;
        let movieList = "";

        this.listOfMovies.forEach(function (movie) {
            programDuration += movie.length;
            movieList += `
        ${movie.getData()}`;
        });

        return `${this.date.getDate()}.${this.date.getMonth() + 1}.${this.date.getFullYear()}, program duration ${programDuration} min ${movieList}`;
    }

    Program.prototype.addMovie = function (movie) {
        this.listOfMovies.push(movie);
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
    }

    Festival.prototype.getData = function () {
        let festivalProgram = "";
        let numOfMoviesAllProgram = 0;

        this.listOfPrograms.forEach(function (program) {
            festivalProgram += `
    ${program.getData()}`;
            numOfMoviesAllProgram += program.getNumOfMovies();
        });

        return `${this.name} festival has ${numOfMoviesAllProgram}  movie titles ${festivalProgram}`;
    }

    Festival.prototype.addProgram = function (program) {
        this.listOfPrograms.push(program);
    }

    const action = new Genre("action");
    const drama = new Genre("drama");
    const comedy = new Genre("comedy");
    const western = new Genre("western");

    function createMovie(movieTitle, movieLength, genre) {
        return new Movie(movieTitle, genre, movieLength);
    }

    function createProgram(date) {
        return new Program(date);
    }

    const p1 = createProgram("28 Oct 2017");
    const p2 = createProgram("29 Oct 2017");

    const m1 = createMovie("Spider-Man: Homecoming", 133, action);
    const m2 = createMovie("War for the Planet of the Apes", 140, drama);
    const m3 = createMovie("The Dark Tower", 95, western);
    const m4 = createMovie("Deadpool", 108, comedy);

    const festival = new Festival("Weekend");

    p1.addMovie(m1);
    p1.addMovie(m2);
    p1.addMovie(m3);
    p2.addMovie(m4);

    festival.addProgram(p1);
    festival.addProgram(p2);

    console.log(festival.getData());

})();