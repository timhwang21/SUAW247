import React, { Component } from 'react';
import { bool, func, number } from 'prop-types';

import { Star } from '../../icons';

import './ScaleItem.css';

class ScaleItem extends Component {
  static propTypes = {
    hover: bool,
    active: bool,
    onClick: func.isRequired,
    onMouseEnter: func.isRequired,
    onMouseLeave: func.isRequired,
    value: number,
  };

  handleMouseEnter = () => {
    const { onMouseEnter, value } = this.props;

    onMouseEnter(value);
  };

  handleMouseLeave = () => {
    const { onMouseLeave, value } = this.props;

    onMouseLeave(value);
  };

  handleClick = () => {
    const { onClick, value } = this.props;

    onClick(value);
  };

  render() {
    const { hover, active } = this.props;

    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}
      >
        <Star
          hover={hover}
          active={active}
        />
      </div>
    );
  }
}

export default ScaleItem;