import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { postService } from '../../../services/PostService';

class PostsFromAuthor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        const { authorId } = this.props;

        postService.fetchAuthorPosts(authorId)
            .then(posts => {
                this.setState({
                    posts: posts.slice(-3)
                });
            })
    }

    renderPosts(posts) {
        return posts.map(post => {
            const { id, title } = post;

            return (
                <Link to={`/posts/${id}`} key={id}>
                    <h6 className="truncate">{title}</h6>
                </Link>
            )
        })
    }

    render() {
        const { posts } = this.state;
        const { renderPosts } = this;

        return (
            <div className="blue-text text-darken-4">
                <h5>3 more posts from same author</h5>
                {renderPosts(posts)}
            </div>
        );
    }
}

export { PostsFromAuthor };