import React, { Component } from 'react';
import './App.css';
import NavBar from './components/header';
import TitleCard from './components/titleCard';
import Search from './components/SearchBar';
class App extends Component {
 
  render() {
    return (
      <div className="App">
        <NavBar name="Saved"/>
        <TitleCard/>
        <Search/>
      </div>
    );
  }
}

export default App;
