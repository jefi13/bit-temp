import React from 'react';
import PostList from './PostList';

const Main = (props) => {
    const { data } = props;

    return (
        <div className="container">
            <PostList posts={data} />
        </div>
    )
}

export default Main;