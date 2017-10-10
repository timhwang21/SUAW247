import React, { Component } from 'react';
import { bool, number, func } from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { padStart } from 'lodash';
import dimensions from 'react-dimensions';

import { getTime, getIsBreak, setTime } from '../../modules/clock';
import { timeShape } from '../../propTypes';
import ProgressBar from '../ProgressBar';

import './Clock.css';

function formatTime({ minutes, seconds }) {
  return `${padStart(minutes, 2, '0')}:${padStart(seconds, 2, '0')}`;
}

const MINUTE = 60;
const BREAK = 5;
const WORK = 25;
const BREAK_SECONDS = MINUTE * BREAK;
const WORK_SECONDS = MINUTE * WORK;

const mapStateToProps = state => ({
  time: getTime(state),
  isBreak: getIsBreak(state),
});

const mapDispatchToProps = {
  setTime,
};

class Clock extends Component {
  static propTypes = {
    time: timeShape.isRequired,
    isBreak: bool.isRequired,
    setTime: func.isRequired,
    large: bool,
    containerHeight: number,
    containerWidth: number,
  };

  componentDidMount() {
    const { setTime } = this.props;

    this.interval = setInterval(setTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  get timeMessage() {
    const { isBreak, time: { minutes, seconds } } = this.props;

    return isBreak
      ? { time: formatTime({ minutes, seconds }), message: 'until next session' }
      : { time: formatTime({ minutes: minutes - 5, seconds }), message: 'until break' };
  }

  get percentTimeLeft() {
    const { isBreak, time: { totalSeconds } } = this.props;

    const percentLeft = isBreak
      ? (totalSeconds / BREAK_SECONDS)
      : ((totalSeconds - BREAK_SECONDS) / WORK_SECONDS);

    return 100 - Number((percentLeft * 100).toFixed(2));
  }

  get isVertical() {
    const { containerHeight, containerWidth } = this.props;

    return containerHeight > containerWidth;
  }

  render() {
    const { isBreak, large } = this.props;

    const { time, message } = this.timeMessage;

    return (
      <div id="clock" className={classnames(large && 'large')}>
        <ProgressBar percent={this.percentTimeLeft} red={!isBreak} vertical={this.isVertical} />
        <div className="clock-time clock-text">
          {time}
        </div>
        <div className="clock-message clock-text">
          {message}
        </div>
      </div>
    );
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  dimensions({ className: 'flex', elementResize: true }),
)(Clock);