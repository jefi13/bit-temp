import React from 'react';
import PostItem from './PostItem';

const PostList = (props) => {
    const { posts } = props;

    return (
        <div className="row">
            <PostItem data={posts} />
        </div>
    )
}

export default PostList;