import React, { Component } from 'react';
import { string, number, bool } from 'prop-types';
import classnames from 'classnames';

import './ProgressBar.css';

class ProgressBar extends Component {
  static propTypes = {
    className: string,
    percent: number,
    red: bool,
  };

  get className() {
    const { className, red } = this.props;

    return classnames('ProgressBar', className, red && 'red');
  }

  render() {
    const { percent } = this.props;

    return (
      <div
        className={this.className}
        style={{ width: percent + '%' }}
      />
    );
  }
}

export default ProgressBar;