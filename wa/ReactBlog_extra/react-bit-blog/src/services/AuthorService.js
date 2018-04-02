import axios from 'axios';

import { constants } from './../shared/constants';
import { Author } from './../models/Author';

class AuthorService {
    fetchAuthors() {
        const requestUrl = `${constants.BASE_API_ENDPOINT}/users`;

        return axios.get(requestUrl)
            .then(({ data }) => {
                const authorList = data.map(author => new Author(author));

                return authorList;
            });
    }

    fetchAuthorDetails(authorId) {
        const requestUrl = `${constants.BASE_API_ENDPOINT}/users/${authorId}`;

        return axios.get(requestUrl)
            .then(({ data }) => {
                return new Author(data);
            });
    }
}

export const authorService = new AuthorService();