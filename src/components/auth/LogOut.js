import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { hidable } from '../decorators';
import { Button } from '../buttons';
import { closeBody } from '../../modules/ui';
import { logout } from '../../modules/user';

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(closeBody());
    dispatch(logout());
  },
});

const LogOut = ({ logout }) => (
  <Button dark onClick={logout}>
    Sign Out
  </Button>
);

LogOut.propTypes = {
  logout: func,
};

LogOut.displayName = 'LogOut';

export default compose(hidable, connect(null, mapDispatchToProps))(LogOut);
