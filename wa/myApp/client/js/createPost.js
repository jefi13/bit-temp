import Post from "./post.js"

const createPosts = (postsListData) => {
    const myPosts = postsListData.map((post) => {
        return new Post(post.id, post.title, post.intro);
    })
    console.log(myPosts);

    return myPosts;
}

export default createPosts;