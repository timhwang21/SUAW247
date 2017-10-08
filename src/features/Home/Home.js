import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { userShape } from '../../propTypes';
import { getUser } from '../../modules/user';

import { LogOut } from '../../components/auth';

import './Home.css';

const mapStateToProps = state => ({
  user: getUser(state)
});

class Home extends Component {
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
      <div className="Home">
        <div className="Home-header">
          <h2>Welcome to React</h2>
        </div>
        <LogOut hidden={!user}/>
        {this.renderUser()}
      </div>
    );
  }
}

export default compose(
  connect(mapStateToProps),
)(Home);
