import { Shows } from './../entities/Shows';
import { Seasons } from './../entities/Seasons';
import { Cast } from './../entities/Cast';
import { SearchInfo } from './../entities/SearchInfo';
import { SelectedShow } from './../entities/SelectedShow';

class ShowActions {
 createShows = (shows) => {
    shows = shows.slice(0, 50);

    return shows.map((element, i) => {
        return new Shows(element.id, element.name, element.image.medium);
    });
}

 createSeasons = (seasons) => {
    return seasons.map((element) => {
        return new Seasons(element.premiereDate, element.endDate);
    });
}

 createCast = (casts) => {
    return casts.map((element, i) => {
        return new Cast(element.person.name);
    });
}

 createSearchInfo = (search) => {
    return search.map((element) => {
        return new SearchInfo(element.show.name, element.show.id);
    });
}

 createSelectedShow = (name, img, summary, seasons, cast) => {
    return new SelectedShow(name, seasons, cast, summary, img)
}

 selectedShowFromList = (showsList, input) => {
    showsList.forEach((element) => {
        if (element.id === input) {
            return element;
        }
    });

    return "show not found";
}
}

export const showActions = new ShowActions();