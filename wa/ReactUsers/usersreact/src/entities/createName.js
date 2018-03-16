import Name from './Name'
import Email from './Email'
import Dob from './Dob'
import Picture from './Picture'
import users from '../components/users'




const createName = (index) => {
        return new Name(users[index].name.title, users[index].name.first, users[index].name.last)
}

const createEmail = (index) => {
    return new Email (users[index].email)
   
}

const createDob = (index) => {
    return new Dob (users[index].email);
}

const createPricture = () => {
    return new Picture (users[index].picture.large, users[index].picture.medium, users[index].picture.thumbnail);
}

export default createName;


