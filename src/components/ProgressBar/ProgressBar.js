import React, { Component } from 'react';
import { string, number, bool } from 'prop-types';
import classnames from 'classnames';

import './ProgressBar.css';

class ProgressBar extends Component {
  static propTypes = {
    className: string,
    percent: number,
    red: bool,
    vertical: bool,
  };

  get className() {
    const { className, vertical, red } = this.props;

    return classnames({
      'ProgressBar': true,
      [className]: className,
      horizontal: !vertical,
      vertical,
      red,
    });
  }

  render() {
    const { percent, vertical } = this.props;

    return (
      <div
        className={this.className}
        style={{ [vertical ? 'height' : 'width']: (100 - percent) + '%' }}
      />
    );
  }
}

export default ProgressBar;