import React, { Component } from 'react';
import './App.css';
import { HomePage } from './home/HomePage';
import { showServices } from '../services/ShowServices';
import { showActions } from '../services/ShowActions'

class App extends Component {
  constructor(props){
    super()
    this.state = {
      showsData:[],
      searchValue:""
    }
  }

  componentDidMount() {
    showServices.getShows().then((result) => {
      const showsData = showActions.createShows(result)       
      this.setState({ showsData: showsData });
    });
  }

  onSearchValueChange = (inputValue) => {
    this.setState({ searchValue: inputValue.toLowerCase() });    
  }

  // fetchNewUsers = () => {
  //   this.setState({ loading: true, searchValue:"" });
    
  //   showServices.getShows().then((result) => {
  //     this.setState({ usersData: result });
  //   });
  // }

  // getUsers = () => {
  //   const { showData } = this.state;

  //   return showData.filter((show) => {
  //     return show.getFullName().toLowerCase().includes(this.state.searchValue);
  //   });
  // }



  render() {
    return (
      <HomePage showsData = {this.state.showsData} onSearchValueChange={this.onSearchValueChange} />
    );
  }

}
export default App;
