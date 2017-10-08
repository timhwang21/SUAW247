import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { padStart } from 'lodash';

import { getTime, getIsBreak, setTime } from '../../modules/clock';
import { timeShape } from '../../propTypes';

import './Clock.css';

function formatTime({ minutes, seconds }) {
  return `${padStart(minutes, 2, '0')}:${padStart(seconds, 2, '0')}`;
}

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

  render() {
    const { time, message } = this.timeMessage;
    return (
      <div id="clock">
        <div className="clock-time">
          {time}
        </div>
        <div className="clock-message">
          {message}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clock);