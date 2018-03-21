class Name {
    constructor(title, first, last) {
        this.title = title;
        this.first = first;
        this.last = last;
    }

    getFirstName() {
        return this.first;
    }

    getFullName() {
        return `${this.first} ${this.last}`;
    }
}

export default Name;