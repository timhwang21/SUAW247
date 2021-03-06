import React, { Component } from 'react';
import { oneOfType, string, number, bool, func } from 'prop-types';
import classnames from 'classnames';
import range from 'lodash/range';

import { hidable } from '../decorators';

import ScaleItem from './components/ScaleItem';

import './Scale.css';

class Scale extends Component {
  static propTypes = {
    className: string,
    count: number,
    disabled: bool,
    value: oneOfType([number, string]),
    onChange: func,
  };

  static defaultProps = {
    count: 5,
  };

  state = {
    hoverIdx: null,
  };

  handleMouseEnter = hoverIdx => {
    const { disabled } = this.props;

    if (disabled) {
      return;
    }

    this.setState({ hoverIdx });
  };

  handleMouseLeave = () => {
    const { disabled } = this.props;

    if (disabled) {
      return;
    }

    this.setState({ hoverIdx: null });
  };

  handleFocus = () => {
    const { count } = this.props;
    const { hoverIdx } = this.state;

    // Don't highlight if focused via click
    if (hoverIdx) {
      return;
    }

    this.handleMouseEnter(count);
  };

  handleBlur = this.handleMouseLeave;

  handleKeyDown = event => {
    if (!isNaN(event.key)) {
      return this.handleNumber(event);
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      return this.handleLeftRight(event);
    }
  };

  handleNumber = event => {
    const { count } = this.props;

    const number = Number(event.key);

    if (number <= count) {
      this.handleChange(number);
    }
  };

  handleLeftRight = event => {
    const { count, value } = this.props;

    if (event.key === 'ArrowLeft' && value > 0) {
      this.handleChange(value - 1);
    } else if (event.key === 'ArrowRight' && value < count) {
      this.handleChange(value + 1);
    }
  };

  handleChange = newValue => {
    const { disabled, onChange, value } = this.props;

    if (disabled) {
      return;
    }

    onChange(value === newValue ? null : newValue);
  };

  get className() {
    const { className, disabled, value } = this.props;

    return classnames({
      Scale: true,
      [className]: className,
      disabled,
      'has-value': value,
    });
  }

  renderItems() {
    const { count, value } = this.props;
    const { hoverIdx } = this.state;

    return range(1, count + 1).map(num => (
      <ScaleItem
        key={num}
        value={num}
        hover={num <= hoverIdx}
        active={num <= value}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleChange}
      />
    ));
  }

  render() {
    const { value } = this.props;

    return (
      <div
        className={this.className}
        tabIndex={0}
        title={value}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
      >
        {this.renderItems()}
      </div>
    );
  }
}

export default hidable(Scale);
