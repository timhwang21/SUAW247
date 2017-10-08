import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom'

import './NavLink.css';

const NavLink = props => (
  <RouterNavLink
    {...props}
    exact
    className="NavLink"
    activeClassName="NavLink-active"
  />
);

export default NavLink;