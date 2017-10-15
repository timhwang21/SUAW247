import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import firebase, { ui } from '../../firebase';
import { hidable } from '../decorators';
import { login } from '../../modules/user';

import 'firebaseui/dist/firebaseui.css';
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

  componentDidMount() {
    const { login, goHome } = this.props;

    this.ui = ui;
    this.ui.start(this.container, {
      callbacks: {
        signInSuccess: user => {
          login(user);
          goHome();
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
    });
  }

  componentWillUnmount() {
    this.ui.reset();
  }

  setRef = node => (this.container = node);

  render() {
    return <div id="LogInPage" ref={this.setRef} />;
  }
}

export default compose(hidable, connect(null, mapDispatchToProps))(LogIn);
