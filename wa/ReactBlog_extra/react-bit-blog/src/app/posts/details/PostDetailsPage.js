import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PostAuthor } from './PostAuthor';
import { PostsFromAuthor } from './PostsFromAuthor';
import { postService } from './../../../services/PostService';

class PostDetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null
        };
    }

    loadPost(props) {
        const { match: { params } } = props;
        const postId = params.postId;

        postService.fetchPostDetails(postId)
            .then(post => {
                this.setState({ post });
            });
    }

    componentDidMount() {
        this.loadPost(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.loadPost(nextProps);
    }

    render() {
        if (!this.state.post) {
            return <h2 className="blue-text text-darken-4 center">Nothing to display!</h2>
        }

        const { title, content, authorId } = this.state.post;

        return (
            <div className="blue-text text-darken-4">
                <Link to="/">
                    <button className="btn blue darken-4">
                        <i className="material-icons">keyboard_backspace</i>
                    </button>
                </Link>
                <div className="card-panel">
                    <h3 className="center">{title}</h3>
                    <PostAuthor authorId={authorId} />
                    <p>{content}</p>
                    <hr />
                    <PostsFromAuthor authorId={authorId} />
                </div>
            </div>
        );
    }
}

export { PostDetailsPage };