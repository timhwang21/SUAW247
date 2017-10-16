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
    return <div className={this.className}>{this.renderItems()}</div>;
  }
}

export default hidable(Scale);
