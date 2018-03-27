import axios from 'axios';

import { BASE_API_ENDPOINT } from './../shared/constants';
import { Author } from './../models/Author';

class AuthorService {
    fetchAuthors() {
        const requestUrl = `${BASE_API_ENDPOINT}/users`;

        return axios.get(requestUrl)
            .then(({ data }) => {
                const authorList = data.map(author => new Author(author));

                return authorList;
            });
    }

    fetchAuthorDetails(authorId) {
        const requestUrl = `${BASE_API_ENDPOINT}/users/${authorId}`;

        return axios.get(requestUrl)
            .then(({ data }) => {
                return new Author(data);
            });
    }
}

export const authorService = new AuthorService();