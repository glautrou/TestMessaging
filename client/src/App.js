import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Messaging</h1>
        </header>
        <p className="App-intro">
          <Router>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>

              <hr />
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </div>
          </Router>

        </p>
      </div>
    );
  }
}

export default App;
