import React from 'react';
import { Link } from 'react-router-dom';

const AuthorItem = (props) => {
    const { id, name } = props;

    return (
        <Link to={`/authors/${id}`}>
            <div className="row">
                <div className="col s12">
                    <div className="card blue darken-1 hoverable">
                        <div className="card-content white-text">
                            <span className="card-title">{name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export { AuthorItem };