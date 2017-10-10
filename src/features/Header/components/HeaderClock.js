import React, { Component } from 'react';
import { string } from 'prop-types';
import classnames from 'classnames';
import { format } from 'date-fns';

import './HeaderClock.css';

class HeaderClock extends Component {
  static propTypes = {
    className: string,
  };

  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.interval = setInterval(this.setTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setTime = () => this.setState({ time: new Date() });

  get time() {
    const { time } = this.state;

    return format(time, 'hh:mm:ss');
  }

  get className() {
    const { className } = this.props;

    return classnames({
      HeaderClock: true,
      [className]: className,
    });
  }

  render() {
    return (
      <div id="HeaderClock" className={this.className} >
        {this.time}
      </div>
    );
  }
}

export default HeaderClock;