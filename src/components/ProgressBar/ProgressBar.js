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
    const { className } = this.props;

    return classnames('ProgressBar', className);
  }

  render() {
    const { percent, red } = this.props;

    return (
      <div className={classnames('ProgressBar-wrapper', red && 'red')}>
        <div
          className={this.className}
          style={{ width: percent + '%' }}
        />
      </div>
    );
  }
}

export default ProgressBar;