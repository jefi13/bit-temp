import React from 'react';

const PostItem = (props) => {
    const { data } = props;

    const createPostItem = (posts) => {
        return posts.map((post, index) => (
            <div className="col s12" key={index}>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{post.title}</span>
                        <p>{post.body}</p>
                    </div>
                </div>
            </div>
        )
        )
    }

    return (createPostItem(data));
}

export default PostItem;