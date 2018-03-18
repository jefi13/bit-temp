import React from 'react';

const UserItem = (props) => {
    const { singleUser } = props;

    return (
        <li className="collection-item avatar">
            <img className="circle" src={singleUser.getPicture()} alt={singleUser.getName()} />
            <div>
                <p>{singleUser.getName()}</p>
                <p>{singleUser.getDob()}</p>
                <p>{singleUser.getEmail()}</p>
            </div>
        </li>
    )
}

export default UserItem;