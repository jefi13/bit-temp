import React from 'react';
import UsersList from '../users/UsersList';
import PropTypes from 'prop-types';

const Main = (props) => {
    const { data, cardType } = props;
    return (
        <div className="container">
            <div className="row">
                <UsersList users={data} cardType={cardType} />
            </div>
        </div>
    )
}

Main.propTypes = {
    data: PropTypes.array.isRequired
}

export default Main;