import React, { Component } from 'react';
import { node, string, bool, func } from 'prop-types';
import classnames from 'classnames';

import './Button.css';

class Button extends Component {
  static propTypes = {
    children: node.isRequired,
    className: string,
    dark: bool,
    fullWidth: bool,
    id: string,
    onClick: func.isRequired,
  };

  get className() {
    const { className, fullWidth, dark } = this.props;

    return classnames({
      Button: true,
      [className]: className,
      'full-width': fullWidth,
      dark,
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