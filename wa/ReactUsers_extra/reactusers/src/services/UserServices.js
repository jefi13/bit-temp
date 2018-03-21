import User from '../entities/User';
import axios from 'axios';

class UserService {
    getUsers() {
        return axios.get('https://randomuser.me/api/?results=15')
            .then((result) => {
                return result.data.results;
            })
            .then((result) => {
                return result.map(user => new User(user.picture, user.name, user.email, user.dob, user.gender));
            })
    }
}

export const userService = new UserService();