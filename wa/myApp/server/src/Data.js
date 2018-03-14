const loremIpsum = require('lorem-ipsum');
const Post = require('./Post');

const getTitle = () => loremIpsum({
    count: 3,
    units: 'words'
});

const getIntro = () => loremIpsum({
    count: 2,
    units: 'sentences'
});

const getPostsData = (count) => {
    const posts = [];
    for (let i = 0; i < count; i++) {
        const title = getTitle();
        const intro = getIntro();
        posts.push(new Post(i, title, intro));
    }

    return posts;
}

module.exports = {
    getPostsData
};