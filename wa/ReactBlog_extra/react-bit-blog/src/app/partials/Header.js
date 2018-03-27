import React from 'react';
import { Link } from 'react-router-dom';

import { MainMenu } from './MainMenu';

const Header = () => (
    <header className="navbar-fixed">
        <nav className="blue darken-4">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">BIT Blog</Link>
                    <MainMenu />
                </div>
            </div>
        </nav>
    </header>
);

export { Header };