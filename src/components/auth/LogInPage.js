import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'react-router-redux';
import { FirebaseAuth } from 'react-firebaseui';

import firebase from '../../firebase';
import { hidable } from '../decorators';
import { login } from '../../modules/user';

import './LogInPage.css';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  goHome: () => dispatch(push('/')),
});

class LogIn extends Component {
  static propTypes = {
    login: func,
    goHome: func,
  };

  uiConfig = {
    callbacks: {
      signInSuccess: user => {
        this.props.login(user);
        this.props.goHome();
        return false;
      },
    },
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: 'https://www.google.com',
  };

  render() {
    return (
      <div id="LogInPage">
        <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
}

export default compose(hidable, connect(null, mapDispatchToProps))(LogIn);
