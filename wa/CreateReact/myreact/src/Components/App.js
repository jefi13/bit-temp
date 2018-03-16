import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import posts from './posts'
import Header from './Header.js'
import Main from './Main'

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
