import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import Main from './partials/Main';
import Footer from './partials/Footer';
import { userService } from '../services/UserServices';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersData: [],
      viewType: JSON.parse(localStorage.getItem("state"))

    }
    localStorage.setItem("state", this.state.viewType)
  }

  changeView = () => {
    this.setState({ viewType: !this.state.viewType });
    localStorage.setItem("state", !this.state.viewType);

  }

  componentDidMount() {
    userService.getUsers().then((result) => {
      this.setState({ usersData: result })
    });
    this.setState({ viewType: JSON.parse(localStorage.getItem("state")) });
  }

  fetchNewUsers = () => {
    userService.getUsers().then((result) => {
      this.setState({ usersData: result })
    });
  }

  render() {
    return (
      <div>
        <Header changeView={this.changeView} fetchNewUsers={this.fetchNewUsers} cardType={this.state.viewType} />
        <Main data={this.state.usersData} cardType={this.state.viewType} />
        <Footer />
      </div>
    );
  }
}

export default App;