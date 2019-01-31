import React, { Component } from 'react';
import './App.css';
import NavBar from './components/header';
import TitleCard from './components/titleCard';
import Search from './components/SearchBar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home';
import Save from './components/pages/Saved';
class App extends Component {
 
  render() {
    return (
      <Router>
        <div className="App">'
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/saved" component={Save}/>
        </Switch>
        </div>

      </Router>
      
    
      
    );
  }
}

export default App;
