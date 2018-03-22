var uiModule = (() => {

    const displayInitalShows = (showsList) => {
        const mainCardDiv = $('.mojDiv');

        showsList.forEach(element => {
            let colDiv = $('<div>')
            let cardDiv = $('<div>');
            let img = $('<img>')
            let h4 = $('<h4>');
            colDiv.addClass('col-12 col-md-6 col-xl-3');
            cardDiv.addClass('card');
            img.attr('id', element.id);
            img[0].src = element.picture;
            h4[0].textContent = element.name;
            cardDiv.append(img);
            cardDiv.append(h4);
            colDiv.append(cardDiv);
            mainCardDiv.append(colDiv);
        });

    }

    const displaySelectedShow = (show) => {
        const showDiv = $('.show-selected');
        const h1 = $('.show-title');
        const imgDiv = createCols(6);
        const img = $('<img>');
        const ulDiv = createCols(6);
        const summaryDiv = createCols(12);
        const ulSeasons = createLiSeasons(show);
        const ulCast = createLiCast(show);

        h1[0].textContent = show.name;

        img.addClass('showImg');
        ulDiv.append('<h2>Seasons</h2>');


        img[0].src = show.img;
        imgDiv.append(img);
        showDiv.append(imgDiv);

        ulDiv.append(ulSeasons)
        ulDiv.append('<h2>Cast</h2>');

        ulDiv.append(ulCast);
        summaryDiv.append(show.summary);



        showDiv.append(ulDiv);
        showDiv.append('<h3>Show Details</h3>');
        showDiv.append(summaryDiv);
    }

    const displaySearch = (search) => {
        const searchInput = $('#search');
        const ul = createSearchValues(search);
        ul[0].style.display = "block";


        console.log(ul);

    }

    const createSearchValues = (search) => {
        let $ul = "";
        const ul = $('.shows');
        search.forEach((element) => {
            ul.append(`<li id="${element.id}">${element.name}</li>`);
            $ul = ul;
        })
        return $ul;
    }

    const createLiSeasons = (show) => {
        let $ul = "";
        const ul = $('<ul>');
        show.seasons.forEach((element) => {
            ul.append(`<li>${element.startDate} - ${element.endDate}</li>`);
            $ul = ul;
        })
        return $ul;
    }

    const createLiCast = (show) => {
        let $ul = "";
        const ul = $('<ul>');
        show.cast.forEach((element) => {
            ul.append(`<li>${element.name}</li>`)
            $ul = ul;
        })
        return $ul;
    }

    const createCols = (rows) => {
        const colDiv = $('<div>');
        colDiv.addClass(`col-xl-${rows}`)
        return colDiv;
    }

    return {
        displayInitalShows,
        displaySelectedShow,
        displaySearch
    }

})()