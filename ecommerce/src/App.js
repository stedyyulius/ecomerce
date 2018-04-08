import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import store from './store'

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
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route
                exact path="/stedy-shop"
                component={Home}
              />
              <Route
                exact path="/stedy-shop/about"
                component={About}
              />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
