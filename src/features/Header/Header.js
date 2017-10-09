import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userShape } from '../../propTypes';
import { getUser } from '../../modules/user';

import userPlaceholder from '../../static/images/user_placeholder.png';
import Image from '../../components/Image';
import { Link } from '../../components/links';
import { LogIn, LogOut } from '../../components/auth';

import './Header.css';

const mapStateToProps = state => ({
  user: getUser(state)
});

class Header extends Component {
  static propTypes = {
    user: userShape,
  };

  renderHeaderRight() {
    const { user } = this.props;

    if (user) {
      return [
        <Link className="Header-link" key="user" to="">
          <Image src={user.photoURL || userPlaceholder} title={user.displayName} small circle />
        </Link>,
        <LogOut key="logout"/>
      ];
    }

    return <LogIn/>;
  }

  render() {
    return (
      <div id="Header">
        <div className="Header-left"/>
        <div className="Header-center">
          <Link to="/" className="Header-link" >
            Shut Up & Write 24/7
          </Link>
        </div>
        <div className="Header-right">
          {this.renderHeaderRight()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);