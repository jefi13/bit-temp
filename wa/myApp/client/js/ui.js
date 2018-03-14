const createPostHtml = (post) => {
    return `
        <div class="col s12 m6">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">${post.title}</span>
                    <p>${post.intro}</p>
                </div>
            </div>
        </div>
    `;
}

const createPostList = (listOfPosts) => {
    const mainDiv = $('.row');

    listOfPosts.forEach(postObj => {
        const article = createPostHtml(postObj)
        mainDiv.append(article);
    })
}

export default createPostList;