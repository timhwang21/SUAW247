import React, { Component } from 'react';
import { node, string, bool } from 'prop-types';
import classnames from 'classnames';

import { hidable } from '../decorators';

import './Panel.css';

class Panel extends Component {
  static propTypes = {
    children: node.isRequired,
    className: string,
    id: string,
    withNav: bool,
  };

  get className() {
    const { className, withNav } = this.props;

    return classnames({
      Panel: true,
      [className]: className,
      'with-nav': withNav,
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

export default hidable(Panel);