import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import usersData from './users.js';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main data={usersData} />
        <Footer />
      </div>
    );
  }

}

export default App;