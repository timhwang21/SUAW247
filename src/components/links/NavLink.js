import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { hidable } from '../decorators';

import './NavLink.css';

const NavLink = props => (
  <RouterNavLink
    {...props}
    exact
    className="NavLink"
    activeClassName="NavLink-active"
  />
);

NavLink.displayName = 'NavLink';

export default hidable(NavLink);
