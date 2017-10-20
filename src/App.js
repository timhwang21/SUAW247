import React, { Component } from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import Footer from './features/Footer';
import Header from './features/Header';
import Home from './features/Home';
import NotFound from './features/NotFound';

import { Route404 } from './components/routes';
import { setTime } from './modules/clock';
import { initializeFullscreen } from './modules/fullscreen';
import { sendNotification } from './modules/notification';
import { isBodyHidden } from './modules/ui';
import { initializeAuth } from './modules/user';

import './App.css';

const mapStateToProps = state => ({
  bodyHidden: isBodyHidden(state),
});

const mapDispatchToProps = {
  sendNotification,
  initializeAuth,
  initializeFullscreen,
  setTime,
};

class App extends Component {
  static propTypes = {
    bodyHidden: bool,
    sendNotification: func,
    initializeAuth: func,
    initializeFullscreen: func,
    setTime: func,
  };

  componentDidMount() {
    const {
      initializeAuth,
      initializeFullscreen,
      setTime,
      sendNotification,
    } = this.props;

    // Set up global clock
    this.interval = setInterval(setTime, 1000);

    // Set up Firebase callback
    initializeAuth();

    // Set up fullscreen check
    initializeFullscreen();

    // Request initial notification permission
    sendNotification('Shut up and start writing!');
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { bodyHidden } = this.props;

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/:view(now|today|week|login)?" component={Home} />
          <Route exact path="/404" component={NotFound} />
          <Route404 />
        </Switch>
        <Footer hidden={bodyHidden} />
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(App);
