import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
              <Navbar>
                <Nav>
                  <NavItem href="/" to="/" active={window.location.pathname === '/'}>Home</NavItem>
                  <NavItem href="/about" to="/about" active={window.location.pathname === '/about'}>About</NavItem>
                </Nav>
              </Navbar>

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
