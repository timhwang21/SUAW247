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
    disabled: bool,
    id: string,
    onClick: func.isRequired,
    onMouseEnter: func,
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
    const { disabled, submit, children, onClick, onMouseEnter } = this.props;

    return (
      <button
        className={this.className}
        disabled={disabled}
        type={submit ? 'submit' : 'button'}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
      >
        {children}
      </button>
    );
  }
}

export default hidable(Button);
