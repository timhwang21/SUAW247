import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import { openBody } from '../../modules/ui';
import { hidable } from '../decorators';
import { Button } from '../buttons';

const mapDispatchToProps = dispatch => ({
  login: () => {
    dispatch(openBody());
    dispatch(push('/login'));
  },
});

const LogIn = ({ login }) => (
  <Button dark onClick={login}>
    Sign In
  </Button>
);

LogIn.propTypes = {
  login: func,
};

LogIn.displayName = 'LogIn';

export default compose(hidable, connect(null, mapDispatchToProps))(LogIn);
