import React from 'react';
import User from '../entities/User';
import UserItem from './UserItem';

const UsersList = (props) => {
    const { users } = props;

    const listOfUsers = users.map(user => new User(user.picture, user.name, user.email, user.dob));

    const userItems = listOfUsers.map((user, index) => <UserItem key={index} singleUser={user} />);

    return (
        <div className="row">
            <ul className="collection">
                {userItems}
            </ul>
        </div>
    )
}

export default UsersList;