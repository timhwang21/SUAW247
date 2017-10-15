import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';

import { userShape } from '../../propTypes';
import { getUser } from '../../modules/user';

import userPlaceholder from '../../static/images/user_placeholder.png';
import Image from '../../components/Image';
import { Link } from '../../components/links';
import { Mobile } from '../../components/responsive';
import { LogIn, LogOut } from '../../components/auth';
import { Button } from '../../components/buttons';
import { Expand } from '../../components/icons';
import HeaderClock from './components/HeaderClock';
import {
  toggleFullscreen,
  canFullscreen,
  isFullscreen,
} from '../../modules/fullscreen';

import './Header.css';

const mapStateToProps = state => ({
  canFullscreen: canFullscreen(state),
  isFullscreen: isFullscreen(state),
  user: getUser(state),
});

const mapDispatchToProps = {
  toggleFullscreen,
};

class Header extends Component {
  static propTypes = {
    user: userShape,
    canFullscreen: bool,
    isFullscreen: bool,
    toggleFullscreen: func,
  };

  renderHeaderLeft() {
    const { canFullscreen, isFullscreen, toggleFullscreen } = this.props;

    return (
      <Button icon clear onClick={toggleFullscreen} hidden={!canFullscreen}>
        <Expand active={isFullscreen} />
      </Button>
    );
  }

  renderHeaderRight() {
    const { user } = this.props;

    return [
      <HeaderClock key="clock" className="Header-text" />,
      user && (
        <Link className="Header-text" key="user" to="">
          <Image
            src={user.photoURL || userPlaceholder}
            title={user.displayName}
            small
            circle
          />
        </Link>
      ),
      user ? <LogOut key="log" /> : <LogIn key="log" />,
    ];
  }

  render() {
    return (
      <div id="Header">
        <div className="Header-left">{this.renderHeaderLeft()}</div>
        <div className="Header-center">
          <Link to="/" className="Header-text">
            <Mobile>
              {match => <div>{match ? 'SUAW247' : 'Shut Up & Write 24/7'}</div>}
            </Mobile>
          </Link>
        </div>
        <div className="Header-right">{this.renderHeaderRight()}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
