import Picture from './Picture';
import Name from './Name';
import Email from './Email';
import Dob from './Dob';

class User {
    constructor(picture, name, email, dob) {
        this.picture = new Picture(picture.large, picture.medium, picture.thumbnail);
        this.name = new Name(name.title, name.first, name.last);
        this.email = new Email(email);
        this.dob = new Dob(dob);
    }

    getPicture() {
        return this.picture.getLarge();
    }

    getName() {
        return this.name.getFirstName();
    }

    getEmail() {
        return `email: ${this.email.hideEmail()}`;
    }

    getDob() {
        return `date of birth: ${this.dob.formatDate()}`;
    }
}

export default User;