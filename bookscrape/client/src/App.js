import React, { Component } from 'react';
import './App.css';
import NavBar from './components/header';
import TitleCard from './components/titleCard';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <TitleCard/>
      </div>
    );
  }
}

export default App;
