import React, { Component, Fragment } from 'react';

import { Header } from './partials/Header';
import { Main } from './Main';
import { Footer } from './partials/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export { App };