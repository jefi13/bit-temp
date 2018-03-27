import React from 'react';

const AuthorInfo = (props) => {
    const { name, username, email, phone } = props;

    return (
        <div className="col s12">
            <div className="card horizontal blue lighten-3">
                <div className="card-image">
                    <img src="https://via.placeholder.com/200x200/0d47a1/fff" alt="" />
                </div>
                <div className="card-stacked">
                    <div className="card-content blue-text text-darken-4">
                        <h5>{name}</h5>
                        <p>username: {username}</p>
                        <p>email: {email}</p>
                        <p>phone: {phone}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { AuthorInfo };