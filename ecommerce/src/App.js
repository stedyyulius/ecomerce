import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';

import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {}
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact path="/"
              component={Home}
            />
            <Route
              exact path="/about"
              component={About}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
