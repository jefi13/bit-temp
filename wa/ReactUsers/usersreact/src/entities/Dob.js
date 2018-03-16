class Dob {
    constructor(dob) {
        this.dob = new Date(dob);
    }

    getDob() {
        return `date of birth: ${this.dob.getDate()}-${this.dob.getMonth()}-${this.dob.getFullYear()}`;
    }
}

export default Dob;