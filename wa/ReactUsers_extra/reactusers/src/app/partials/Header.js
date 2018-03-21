import React from 'react';
import Search from './Search';
import './Header.css';

const Header = (props) => {
    const { cardType } = props;

    return (
        <nav>
            <div className="nav-wrapper container">
                <div className="row">
                    <div className="col s3"><a className="logo">Bit Persons</a></div>
                    <div className="col s6">
                        <Search />
                    </div>
                    <div className="col s3"> <ul className="right hide-on-med-and-down">
                        <li><a onClick={props.changeView}><i className="material-icons">{cardType ? "view_list" : "view_module"}</i></a></li>
                        <li><a onClick={props.fetchNewUsers}><i className="material-icons">refresh</i></a></li>
                    </ul></div>
                </div>
            </div>
        </nav>
    )
}

export default Header;