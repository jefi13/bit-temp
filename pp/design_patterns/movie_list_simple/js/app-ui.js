'use strict';

// UI Module - View
var uiModule = (function () {
    // DOM selectors
    var DOMSelectors = {
        movieDivOutput: '.movie-list',
        movieForm: '#movie-form',
        movieTitleInput: '#movie-title',
        movieLengthInput: '#movie-length',
        movieGenreInput: '#movie-genre',
        createMovieBtn: '#create-movie'
    }

    // Get and create DOM nodes
    var movieDiv = document.querySelector(DOMSelectors.movieDivOutput);
    var movieUlList = document.createElement("ul");
    movieDiv.appendChild(movieUlList);

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

    function showMovieData(movie) {
        var movieItem = document.createElement("li");
        var movieText = document.createTextNode(movie.getData());

        movieItem.appendChild(movieText);
        movieUlList.appendChild(movieItem);
    }

    return {
        DOMSelectors: DOMSelectors,
        getMovieData: getMovieData,
        showMovieData: showMovieData
    }
})();