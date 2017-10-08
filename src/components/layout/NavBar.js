import React, { Component } from 'react';
import { node, string } from 'prop-types';
import classnames from 'classnames';

import hidable from '../decorators/hidable';

import './NavBar.css';

class NavBar extends Component {
  static propTypes = {
    children: node.isRequired,
    className: string,
    id: string,
  };

  get className() {
    const { className } = this.props;

    return classnames('NavBar', className);
  }

  render() {
    const { children, id } = this.props;

    return (
      <div id={id} className={this.className}>
        {children}
      </div>
    );
  }
}

export default hidable(NavBar);