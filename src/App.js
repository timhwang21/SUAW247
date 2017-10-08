import React, { Component } from 'react';
import { userShape } from './propTypes';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getUser } from './modules/user';

import { LogIn, LogOut } from './components/auth';

import './App.css';

const mapStateToProps = state => ({
  user: getUser(state)
});

class App extends Component {
  static propTypes = {
    user: userShape,
  };

  renderUser() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div>
        <div>{user.displayName}</div>
        <div>{user.email}</div>
        <div>{user.photoURL}</div>
      </div>
    );
  }

  render() {
    const { user } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <LogIn hidden={!!user}/>
        <LogOut hidden={!user}/>
        {this.renderUser()}
      </div>
    );
  }
}

export default compose(
  connect(mapStateToProps),
)(App);
