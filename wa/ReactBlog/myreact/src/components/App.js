import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main';
import posts from './posts';

const App = (props) => {
    const { data } = props;

    return (
        <div>
            <Header />
            <Main data={posts} />
        </div>
    )
}

export default App;