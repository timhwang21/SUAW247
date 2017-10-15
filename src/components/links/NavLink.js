import React from 'react';
import { bool } from 'prop-types';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { hidable } from '../decorators';

import './NavLink.css';

const isActive = (match, location) => match || location.pathname === '/';

const NavLink = ({ index, ...props }) => (
  <RouterNavLink
    {...props}
    exact
    className="NavLink"
    activeClassName="NavLink-active"
    isActive={index ? isActive : undefined}
  />
);

NavLink.propTypes = {
  index: bool,
};

NavLink.displayName = 'NavLink';

export default hidable(NavLink);
