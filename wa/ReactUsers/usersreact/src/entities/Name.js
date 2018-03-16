class Name {
    constructor(title, first, last) {
        this.title = title;
        this.first = first;
        this.last = last;
    }

    getName() {
        return `name: ${this.first}`;
    }
}

export default Name;