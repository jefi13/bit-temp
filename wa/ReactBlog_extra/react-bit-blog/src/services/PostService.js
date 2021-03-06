import axios from 'axios';

import { constants } from './../shared/constants';
import { Post } from './../models/Post';

class PostService {
    fetchPosts() {
        const requestUrl = `${constants.BASE_API_ENDPOINT}/posts`;

        return axios.get(requestUrl)
            .then(({ data }) => {
                const postList = data.map(post => new Post(post));

                return postList;
            });
    }

    fetchPostDetails(postId) {
        const requestUrl = `${constants.BASE_API_ENDPOINT}/posts/${postId}`;

        return axios.get(requestUrl)
            .then(({ data }) => {
                return new Post(data);
            });
    }

    fetchAuthorPosts(authorId) {
        const requestUrl = `${constants.BASE_API_ENDPOINT}/posts`;

        const options = {
            params: {
                userId: authorId
            }
        };

        return axios.get(requestUrl, options)
            .then(({ data }) => {
                const postList = data.map(post => new Post(post));

                return postList;
            });
    }
}

export const postService = new PostService();