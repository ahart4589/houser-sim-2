import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// import Dashboard from './components/Dashboard/Dashboard'
// import Wizard from './components/Wizard/Wizard'
import Routes from './routes'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {Routes}
      </div>
    );
  }
}

export default App;
