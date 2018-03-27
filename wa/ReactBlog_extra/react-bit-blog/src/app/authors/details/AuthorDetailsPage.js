import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AuthorInfo } from './AuthorInfo';
import { AuthorAddress } from './AuthorAddress';
import { AuthorCompany } from './AuthorCompany';
import { authorService } from '../../../services/AuthorService';

class AuthorDetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author: null
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        const authorId = params.authorId;

        authorService.fetchAuthorDetails(authorId)
            .then(author => {
                this.setState({ author });
            });
    }

    render() {
        if (!this.state.author) {
            return <h2 className="blue-text text-darken-4 center">Nothing to display!</h2>
        }

        const { address, company } = this.state.author;

        return (
            <div>
                <Link to="/authors">
                    <button className="btn blue darken-4">
                        <i className="material-icons">keyboard_backspace</i>
                    </button>
                </Link>
                <AuthorInfo authorInfo={this.state.author} />
                <AuthorAddress authorAddress={address} />
                <AuthorCompany authorCompany={company} />
            </div>
        );
    }
}

export { AuthorDetailsPage };