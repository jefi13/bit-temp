import axios from 'axios';

class ShowServices {
    getShows() {
        const url = "http://api.tvmaze.com/shows";
        return axios.get(url)
            .then((result) => {
                return result.data;
            })
    }
}


export const showServices = new ShowServices();