import React, { Component } from 'react';
import { node, string, bool } from 'prop-types';
import classnames from 'classnames';

import { hidable } from '../decorators';

import './Row.css';

class Row extends Component {
  static propTypes = {
    children: node.isRequired,
    className: string,
    small: bool,
    large: bool,
    id: string,
  };

  get className() {
    const { className, small, large } = this.props;

    return classnames({
      Row: true,
      [className]: className,
      small,
      large,
    });
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

export default hidable(Row);
