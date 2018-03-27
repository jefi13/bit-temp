import React, { Component } from 'react';

import { AuthorsList } from './AuthorsList';
import { authorService } from '../../services/AuthorService';

class AuthorsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authors: []
        };
    }

    componentDidMount() {
        authorService.fetchAuthors()
            .then(authors => {
                this.setState({ authors });
            });
    }

    render() {
        return (
            <div>
                <h4 className="blue-text text-darken-4 center">AUTHORS</h4>
                <AuthorsList authors={this.state.authors} />
            </div>
        );
    }
}

export { AuthorsPage };