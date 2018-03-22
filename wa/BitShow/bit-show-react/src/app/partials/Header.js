import React from 'react';
import Search from '../partials/Search'
const Header = (props) => {
    const {changeValue} = props;
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img src="index.html" width="30" height="30" className="d-inline-block align-top" alt="" /> BitShow
                </a>
              <Search changeValue={changeValue}/>
            </div>
        </nav>
    )
}

export { Header };