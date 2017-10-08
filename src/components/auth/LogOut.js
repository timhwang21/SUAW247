import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import hidable from '../decorators/hidable';
import { logout } from '../../modules/user';

const mapDispatchToProps = {
  logout,
};

const LogOut = ({ logout }) => (
  <button onClick={logout}>
    Sign Out
  </button>
);

LogOut.propTypes = {
  logout: func,
}

LogOut.displayName = 'LogOut';

export default compose(
  hidable,
  connect(null, mapDispatchToProps),
)(LogOut);
