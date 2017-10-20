import React, { Component } from 'react';
import { any, string } from 'prop-types';
import classnames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';

import { hidable } from '../decorators';

import './Link.css';

class Link extends Component {
  static propTypes = {
    children: any,
    className: string,
    to: string,
  };

  get className() {
    const { className } = this.props;

    return classnames({
      Link: true,
      [className]: className,
    });
  }

  get isExternal() {
    const { to } = this.props;

    return /(^https?:\/\/|^mailto:)/.test(to);
  }

  render() {
    const { to, children, ...props } = this.props;

    return this.isExternal ? (
      <a href={to} className={this.className} target="_blank">
        {children}
      </a>
    ) : (
      <RouterLink {...props} to={to} className={this.className}>
        {children}
      </RouterLink>
    );
  }
}

export default hidable(Link);
