import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import * as screenfull from 'screenfull';

import Header from './features/Header';
import Home from './features/Home';
import NotFound from './features/NotFound';

import firebase from './firebase';
import { Route404 } from './components/routes';
import { setTime } from './modules/clock';
import { setFullscreen } from './modules/fullscreen';
import { sendNotification } from './modules/notification';
import { login } from './modules/user';

import './App.css';

const mapDispatchToProps = {
  login,
  sendNotification,
  setFullscreen,
  setTime,
};

class App extends Component {
  static propTypes = {
    login: func,
    sendNotification: func,
    setFullscreen: func,
    setTime: func,
  };

  componentDidMount() {
    const { setFullscreen, setTime, sendNotification } = this.props;

    // Set up global clock
    this.interval = setInterval(setTime, 1000);

    // Set up Firebase callback
    firebase.auth().onAuthStateChanged(this.handleAuthStateChanged);

    // Request initial notification permission
    sendNotification('Shut up and start writing!');

    // Set up fullscreen check
    if (screenfull.enabled) {
      screenfull.on('change', () => setFullscreen(screenfull.isFullscreen));
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleAuthStateChanged = user => {
    const { login } = this.props;

    user && login(user);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/:view(now|today|week|login)?" component={Home} />
          <Route exact path="/404" component={NotFound} />
          <Route404 />
        </Switch>
      </div>
    );
  }
}

export default compose(withRouter, connect(null, mapDispatchToProps))(App);
