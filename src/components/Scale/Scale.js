import React, { Component } from 'react';
import { string, number, func } from 'prop-types';
import classnames from 'classnames';
import range from 'lodash/range';

import { hidable } from '../decorators';

import ScaleItem from './components/ScaleItem';

import './Scale.css';

class Scale extends Component {
  static propTypes = {
    className: string,
    count: number,
    value: number,
    onChange: func,
  };

  static defaultProps = {
    count: 5,
  };

  state = {
    hoverIdx: null,
  };

  handleMouseEnter = hoverIdx => this.setState({ hoverIdx });

  handleMouseLeave = () => this.setState({ hoverIdx: null });

  handleChange = newValue => {
    const { onChange, value } = this.props;

    onChange(value === newValue ? null : newValue);
  };

  get className() {
    const { className, value } = this.props;

    return classnames({
      Scale: true,
      [className]: className,
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
    ))
  }

  render() {
    return (
      <div className={this.className}>
        {this.renderItems()}
      </div>
    );
  }
}

export default hidable(Scale)