class Post {
    constructor({ userId, id, title, body }) {
        this.authorId = userId;
        this.id = id;
        this.title = title;
        this.content = body;
    }
}

export { Post };