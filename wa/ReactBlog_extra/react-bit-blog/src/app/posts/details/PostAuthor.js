import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { authorService } from './../../../services/AuthorService';

class PostAuthor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author: null
        };
    }

    componentDidMount() {
        const { authorId } = this.props;

        authorService.fetchAuthorDetails(authorId)
            .then(author => {
                this.setState({ author });
            })
    }

    render() {
        if (!this.state.author) {
            return <h2 className="blue-text text-darken-4 center">Nothing to display!</h2>
        }

        const { id, name } = this.state.author;

        return (
            <Link to={`/authors/${id}`}>
                <div className="center">
                    {name}
                </div>
            </Link>
        );
    }
}

export { PostAuthor };