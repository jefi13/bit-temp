import Picture from './Picture';
import Name from './Name';

class User {
    constructor(picture, name, email, dob) {
        this.picture = new Picture(picture.large, picture.medium, picture.thumbnail);
        this.name = new Name(name.title, name.first, name.last);
        this.email = email;
        this.dob = new Date(dob);
    }

    getPicture() {
        return this.picture.getThumbnail();
    }

    getName() {
        return `name: ${this.name.getFirstName()}`;
    }

    getEmail() {
        return `email: ${this.email}`;
    }

    getDob() {
        return `date of birth: ${this.dob.getDate()}-${this.dob.getMonth() + 1}-${this.dob.getFullYear()}`;
    }
}

export default User;