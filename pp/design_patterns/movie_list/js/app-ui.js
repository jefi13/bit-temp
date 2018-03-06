'use strict';

// UI Module - View
var uiModule = (function () {
    // DOM selectors
    var DOMSelectors = {
        movieForm: '#movie-form',
        movieDivOutput: '.movie-list',
        movieTitleInput: '#movie-title',
        movieLengthInput: '#movie-length',
        movieGenreInput: '#movie-genre',
        createMovieBtn: '#create-movie',
        programForm: '#program-form',
        programDivOutput: '.program-list',
        programDateInput: '#program-date',
        createProgramBtn: '#create-program',
        movieSelectorInput: '#select-movie',
        programSelectorInput: '#select-program',
        addMovieToProgramBtn: '#add-movie-to-program', 
        listOfProgramsOutput: '.program-list ul li'
    }

    // Get and create DOM nodes
    var movieDiv = document.querySelector(DOMSelectors.movieDivOutput);
    var movieUlList = document.createElement("ul");
    movieDiv.appendChild(movieUlList);

    var programDiv = document.querySelector(DOMSelectors.programDivOutput);
    var programUlList = document.createElement("ul");
    programDiv.appendChild(programUlList);

    // Get drop-down menu from DOM for each: movie and program
    var movieSelector = document.querySelector(DOMSelectors.movieSelectorInput);
    var programSelector = document.querySelector(DOMSelectors.programSelectorInput);

    // Get movie data from form
    function getMovieData() {
        var title = document.querySelector(DOMSelectors.movieTitleInput).value.trim();
        var length = parseInt(document.querySelector(DOMSelectors.movieLengthInput).value);
        var genreSelect = document.querySelector(DOMSelectors.movieGenreInput);
        var genre = genreSelect.options[genreSelect.selectedIndex].value;

        var collectedMovieData = {
            title: title,
            length: length,
            genre: genre
        }

        return collectedMovieData;
    }

    // Show movie data
    function showMovieData(movieObj) {
        var movieItem = document.createElement("li");
        var movieText = document.createTextNode(movieObj.object.getData());

        movieItem.appendChild(movieText);
        movieUlList.appendChild(movieItem);
    }

    // Put created movie to the drop-down menu
    function addMovieToSelect(movieObj) {
        var option = document.createElement("option");
        option.value = movieObj.index;
        var text = document.createTextNode(movieObj.object.title);
        option.appendChild(text);
        movieSelector.appendChild(option);
    }

    // Get program data from form
    function getProgramData() {
        var date = document.querySelector(DOMSelectors.programDateInput).value;

        var collectedProgramData = {
            date: date
        }

        return collectedProgramData;
    }

    // Show program data
    function showProgramData(programObj) {
        var programItem = document.createElement("li");
        var programText = document.createTextNode(programObj.object.getData());

        programItem.appendChild(programText);
        programUlList.appendChild(programItem);
    }

    // Put created program to the drop-down menu
    function addProgramToSelect(programObj) {
        var option = document.createElement("option");
        option.value = programObj.index;
        var text = document.createTextNode(programObj.object.getData());
        option.appendChild(text);
        programSelector.appendChild(option);
    }

    // Add movie to program on-click
    function addMovieToProgram() {
        var valueOfSelectedMovie = document.querySelector(DOMSelectors.movieSelectorInput).value;
        var selectedMovie = listOfMovies[valueOfSelectedMovie];
        var valueOfSelectedProgram = document.querySelector(DOMSelectors.programSelectorInput).value;
        var selectedProgram = listOfPrograms[valueOfSelectedProgram];

        selectedProgram.movieList.push(selectedMovie);

        var programItem = document.createElement("li");
        var programText = document.createTextNode(selectedProgram.getData());


        var oldProgramItem = document.querySelectorAll(DOMSelectors.listOfProgramsOutput);

        programItem.appendChild(programText);
        programUlList.replaceChild(programItem, oldProgramItem[valueOfSelectedProgram]);
    }

    return {
        DOMSelectors: DOMSelectors,
        getMovieData: getMovieData,
        showMovieData: showMovieData,
        addMovieToSelect: addMovieToSelect,
        getProgramData: getProgramData,
        showProgramData: showProgramData,
        addProgramToSelect: addProgramToSelect,
        addMovieToProgram: addMovieToProgram
    }
})();