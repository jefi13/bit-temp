'use strict';

// Action Module - Controller
var ctrlModule = (function (dataCtrl, uiCtrl) {
    // Activate actions
    function setupEventListeners() {
        // Create movie on-click, add it to list of movies, put created movie to select and show its data
        document.querySelector(uiCtrl.DOMSelectors.createMovieBtn).addEventListener('click', function () {
            var movieData = uiCtrl.getMovieData();
            var result = dataCtrl.addMovie(movieData);
            console.log(result);
            
            uiCtrl.showMovieData(result);
            uiCtrl.addMovieToSelect(result);

            // Reset form
            document.querySelector(uiCtrl.DOMSelectors.movieForm).reset();
        });

        // Create a program on-click, add it to list of programs, put created program to select and show its data
        document.querySelector(uiCtrl.DOMSelectors.createProgramBtn).addEventListener("click", function () {
            var programData = uiCtrl.getProgramData();
            var result = dataCtrl.addProgram(programData);
            console.log(result);
            
            uiCtrl.showProgramData(result);
            uiCtrl.addProgramToSelect(result);

            // Reset form
            document.querySelector(uiCtrl.DOMSelectors.programForm).reset();
        });

        // On-click add selected movie to selected program and update program info
        document.querySelector(uiCtrl.DOMSelectors.addMovieToProgramBtn).addEventListener('click', function () {
            uiCtrl.addMovieToProgram();
        });
    }

    return {
        init: function () {
            setupEventListeners();
        }
    }
})(dataModule, uiModule);