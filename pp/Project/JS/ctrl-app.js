var ctrlModule = ((data, ui) => {

    const init = () => {
        const request = $.get("http://api.tvmaze.com/shows").done((response) => {
            const shows = data.createShows(response);
            ui.displayInitalShows(shows);

        });
    }

    const initSingleShow = () => {
        const selectedShowJson = localStorage.getItem("selectedShow");
        const selectedShow = JSON.parse(selectedShowJson);
        ui.displaySelectedShow(selectedShow);

    }

    $(document).click((event) => {

        let targetId = event.target.id;
        console.log(targetId);


        if (event.type === "click") {
            const searchList = $('.shows');
            searchList[0].innerHTML = "";
            searchList[0].style.display = "none";
        }

        if (event.target.id && event.target.id !== "search") {
            const request = $.get(`http://api.tvmaze.com/shows/${event.target.id}?embed[]=seasons&embed[]=cast`).done((response) => {


                const seasonsFromResponse = response._embedded.seasons;
                const seasons = data.createSeasons(seasonsFromResponse);

                const castsFromResponse = response._embedded.cast;
                const cast = data.createCast(castsFromResponse);

                const summary = response.summary;
                const img = response.image.original;
                const name = response.name;

                const selectedShow = data.createSelectedShow(name, img, summary, seasons, cast);

                const selectedShowJson = JSON.stringify(selectedShow);
                localStorage.setItem("selectedShow", selectedShowJson);

                location.href = 'show-info.html';

            })
        }
    })

    $('input').keypress((e) => {
        if (e.which == 13) {
            const searchList = $('.shows');
            searchList[0].innerHTML = "";
            const input = $('#search')[0].value;

            const response = $.get(`http://api.tvmaze.com/search/shows?q=${input}`).done((response) => {

                const searchData = data.createSearchInfo(response);
                ui.displaySearch(searchData)
            });
        }
    });

    return {
        init,
        initSingleShow
    }

})(dataModule, uiModule)