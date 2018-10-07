import React, { Component } from 'react';
import './App.css';

//custom components
import Login from './containers/Login/Login';
import Home from './components/Home/Home';


class App extends Component {
  render() {
    return (

      <div className="App">
        <Login />
        {/* <Home /> */}
      </div>
    );
  }
}

export default App;
