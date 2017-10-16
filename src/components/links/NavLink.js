import React, { Component } from 'react';
import { string, bool } from 'prop-types';
import classnames from 'classnames';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { hidable } from '../decorators';

import './NavLink.css';

const isActive = (match, location) => match || location.pathname === '/';

class NavLink extends Component {
  static propTypes = {
    className: string,
    disabled: bool,
    index: bool,
  };

  handleClick = e => {
    const { disabled } = this.props;

    disabled && e.preventDefault();
  };

  get className() {
    const { className, disabled } = this.props;

    return classnames({
      NavLink: true,
      [className]: className,
      disabled,
    });
  }

  render() {
    const { index, ...props } = this.props;

    return (
      <RouterNavLink
        {...props}
        exact
        className={this.className}
        activeClassName="NavLink-active"
        isActive={index ? isActive : undefined}
        onClick={this.handleClick}
      />
    );
  }
}

export default hidable(NavLink);
