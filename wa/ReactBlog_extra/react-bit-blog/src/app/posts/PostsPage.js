import React, { Component } from 'react';

import { PostsList } from './PostsList';
import { postService } from './../../services/PostService';

class PostsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        postService.fetchPosts()
            .then(posts => {
                this.setState({ posts });
            });
    }

    render() {
        return (
            <div>
                <h4 className="blue-text text-darken-4 center">POSTS</h4>
                <PostsList posts={this.state.posts} />
            </div>
        );
    }
}

export { PostsPage };