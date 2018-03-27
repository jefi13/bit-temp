import React from 'react';

import { AuthorItem } from './AuthorItem';

const AuthorsList = (props) => {
    const { authors } = props;

    const authorsListView = authors.map((author) => {
        return <AuthorItem {...author} key={author.id} />
    });

    return (
        <div>
            {authorsListView}
        </div>
    );
}

export { AuthorsList };