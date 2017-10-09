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

import './App.css';

const mapDispatchToProps = {
  login,
};

class App extends Component {
  static propTypes = {
    login: func,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(this.handleAuthStateChanged);
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
          <Route exact path="/login" component={LogInPage} />
          <Route exact path="/404" component={NotFound} />
          <Route path="/" component={Home}/>
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
