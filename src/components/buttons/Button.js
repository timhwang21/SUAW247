import React, { Component } from 'react';
import { node, string, bool, func } from 'prop-types';
import classnames from 'classnames';

import { hidable } from '../decorators';

import './Button.css';

class Button extends Component {
  static propTypes = {
    children: node.isRequired,
    className: string,
    clear: bool,
    dark: bool,
    icon: bool,
    fullWidth: bool,
    submit: bool,
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
    const { submit, children, onClick } = this.props;

    return (
      <button
        className={this.className}
        type={submit ? 'submit' : 'button'}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default hidable(Button);
