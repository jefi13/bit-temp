class Picture {
    constructor(large, medium, thumbnail) {
        this.large = large;
        this.medium = medium;
        this.thumbnail = thumbnail;
    }

    getThumbnail() {
        return this.thumbnail;
    }
}

export default Picture;