var dataModule = (() => {

    class Shows {
        constructor(id, name, picture) {
            this.id = id;
            this.name = name;
            this.picture = picture;
        }
    }

    class Seasons {
        constructor(startDate, endDate) {
            this.startDate = startDate;
            this.endDate = endDate;
        }
    }

    class Cast {
        constructor(name) {
            this.name = name;
        }
    }

    class SelectedShow {
        constructor(name, seasons, cast, summary, img) {
            this.name = name;
            this.seasons = seasons;
            this.cast = cast;
            this.summary = summary;
            this.img = img;
        }
    }

    class SearchInfo {
        constructor(name, id) {
            this.name = name;
            this.id = id;
        }
    }
    const createShows = (shows) => {
        let showsList = [];
        shows.forEach((element, i) => {
            if (i < 50) {
                showsList.push(new Shows(element.id, element.name, element.image.medium));
            }
        });
        return showsList;
    }

    const createSeasons = (seasons) => {
        let seasonList = [];
        seasons.forEach((element) => {
            seasonList.push(new Seasons(element.premiereDate, element.endDate));
        })
        return seasonList;
    }

    const createCast = (casts) => {
        let castList = [];
        casts.forEach((element, i) => {
            castList.push(new Cast(element.person.name));
        })
        return castList;
    }

    const createSearchInfo = (search) => {
        let searchList = [];
        search.forEach((element) => {
            searchList.push(new SearchInfo(element.show.name, element.show.id));
        })
        return searchList;
    }

    const createSelectedShow = ((name, img, summary, seasons, cast) => {
        return new SelectedShow(name, seasons, cast, summary, img)
    })

    const selectedShowFromList = (showsList, input) => {
        showsList.forEach((element) => {
            if (element.id === input) {
                return element;
            }
        })
        return "show not found";
    }

    return {
        createShows,
        selectedShowFromList,
        createSeasons,
        createCast,
        createSelectedShow,
        createSearchInfo
    }

})()