import React, { Component } from 'react';
import { node, string, bool, func } from 'prop-types';
import classnames from 'classnames';

import './Button.css';

class Button extends Component {
  static propTypes = {
    children: node.isRequired,
    className: string,
    clear: bool,
    dark: bool,
    icon: bool,
    fullWidth: bool,
    id: string,
    onClick: func.isRequired,
  };

  get className() {
    const { className, clear, dark, icon, fullWidth } = this.props;

    return classnames({
      Button: true,
      [className]: className,
      'full-width': fullWidth,
      clear,
      dark,
      icon,
    });
  }

  render() {
    const { children, onClick } = this.props;

    return (
      <button className={this.className} onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;