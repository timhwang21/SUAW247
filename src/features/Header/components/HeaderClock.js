import React, { Component } from 'react';
import { string } from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';

import { getCurrentTime } from '../../../modules/clock';

import './HeaderClock.css';

const mapStateToProps = state => ({
  currentTime: getCurrentTime(state),
});

class HeaderClock extends Component {
  static propTypes = {
    className: string,
    currentTime: string,
  };

  get className() {
    const { className } = this.props;

    return classnames({
      HeaderClock: true,
      [className]: className,
    });
  }

  render() {
    const { currentTime } = this.props;

    return (
      <div id="HeaderClock" className={this.className} >
        {currentTime}
      </div>
    );
  }
}

export default connect(mapStateToProps)(HeaderClock);