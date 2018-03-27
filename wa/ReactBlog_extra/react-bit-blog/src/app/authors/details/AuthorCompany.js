import React from 'react';

const AuthorCompany = (props) => {
    const { name, slogan } = props;

    return (
        <div className="col s12">
            <div className="card blue lighten-3">
                <div className="card-content blue-text text-darken-4">
                    <span className="card-title">Company</span>
                    <p>name: {name}</p>
                    <p>slogan: {slogan}</p>
                </div>
            </div>
        </div>
    );
}

export { AuthorCompany };