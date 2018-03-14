import Post from './post.js';
import createPost from "./createPost.js"
import createPostList from "./ui.js"

const apiURL = 'http://127.0.0.1:3000';

const initPosts = () => {
    fetch(apiURL)
        .then((response) => {

            return response.json();
        })
        .then((postsListData) => {
            return createPost(postsListData);
        })
        .then((postsObjList) => {
            createPostList(postsObjList);
        })
        .catch((error) => {
            // Handle error
        })
}

export {
    initPosts
}