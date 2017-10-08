import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import firebase, { ui } from '../../firebase';
import hidable from '../decorators/hidable';
import { login } from '../../modules/user';

import 'firebaseui/dist/firebaseui.css';

const mapDispatchToProps = {
  login,
};

class LogIn extends Component {
  static propTypes = {
    login: func,
  };

  componentDidMount() {
    const { login } = this.props;

    this.ui = ui;
    this.ui.start(this.container, {
      callbacks: {
        signInSuccess: user => {
          login(user);
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

  setRef = node => this.container = node;

  render() {
    return <div ref={this.setRef}></div>;
  }
}

export default compose(
  hidable,
  connect(null, mapDispatchToProps),
)(LogIn);
