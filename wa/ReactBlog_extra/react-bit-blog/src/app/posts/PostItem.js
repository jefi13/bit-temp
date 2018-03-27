import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = (props) => {
    const { id, title, content } = props;

    return (
        <Link to={`/posts/${id}`}>
            <div className="row">
                <div className="col s12">
                    <div className="card blue darken-1 hoverable">
                        <div className="card-content white-text">
                            <span className="card-title">{title}</span>
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export { PostItem };