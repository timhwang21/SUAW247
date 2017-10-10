import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Switch, withRouter } from 'react-router-dom'

import Header from './features/Header';
import Home from './features/Home';
import NotFound from './features/NotFound';

import firebase from './firebase';
import { Route404 } from './components/routes';
import { LogInPage } from './components/auth';
import { login } from './modules/user';
import { setTime } from './modules/clock';

import './App.css';

const mapDispatchToProps = {
  login,
  setTime,
};

class App extends Component {
  static propTypes = {
    login: func,
    setTime: func,
  };

  componentDidMount() {
    const { setTime } = this.props;

    this.interval = setInterval(setTime, 1000);

    firebase.auth().onAuthStateChanged(this.handleAuthStateChanged);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleAuthStateChanged = user => {
    const { login } = this.props;

    user && login(user);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/:view(now|today|week)?" component={Home}/>
          <Route exact path="/login" component={LogInPage} />
          <Route exact path="/404" component={NotFound} />
          <Route404/>
        </Switch>
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(null, mapDispatchToProps),
)(App);
