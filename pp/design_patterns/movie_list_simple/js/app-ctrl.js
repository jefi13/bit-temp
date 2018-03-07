'use strict';

// Action Module - Controller
var ctrlModule = (function (dataCtrl, uiCtrl) {
    // Activate actions
    function setupEventListeners() {
        // Create movie on-click, add it to list of movies and show its data
        document.querySelector(uiCtrl.DOMSelectors.createMovieBtn).addEventListener('click', function () {
            var movieData = uiCtrl.getMovieData();
            var movieObj = dataCtrl.addMovie(movieData);
            uiCtrl.showMovieData(movieObj);

            // Reset form
            document.querySelector(uiCtrl.DOMSelectors.movieForm).reset();
        });
    }

    return {
        init: function () {
            setupEventListeners();
        }
    }
})(dataModule, uiModule);