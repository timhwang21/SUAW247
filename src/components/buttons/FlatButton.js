import React, { Component } from 'react';
import { node, string, func } from 'prop-types';
import classnames from 'classnames';

import './FlatButton.css';

class FlatButton extends Component {
  static propTypes = {
    children: node.isRequired,
    className: string,
    id: string,
    onClick: func.isRequired,
  };

  get className() {
    const { className } = this.props;

    return classnames('FlatButton', className);
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

export default FlatButton;