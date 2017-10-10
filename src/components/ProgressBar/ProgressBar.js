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
    const { className, vertical } = this.props;

    return classnames({
      'ProgressBar': true,
      [className]: className,
      horizontal: !vertical,
      vertical,
    });
  }

  render() {
    const { percent, red, vertical } = this.props;

    return (
      <div className={classnames('ProgressBar-wrapper', red && 'red')}>
        <div
          className={this.className}
          style={{ [vertical ? 'height' : 'width']: percent + '%' }}
        />
      </div>
    );
  }
}

export default ProgressBar;