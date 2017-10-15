import React, { Component } from 'react';
import { object } from 'prop-types';
import classnames from 'classnames';

import Clock from '../../components/Clock';
import Dropzone from '../../components/Dropzone';
import { Button } from '../../components/buttons';
import { Chevron } from '../../components/icons';

import './Home.css';

import Dashboard from './components/Dashboard';
import Social from './components/Social';

class Home extends Component {
  static propTypes = {
    match: object,
  };

  constructor(props) {
    super(props);

    const { match } = props;

    this.state = {
      bodyHidden: !match.params.view,
      background: null,
    };
  }

  toggleBody = () => this.setState({ bodyHidden: !this.state.bodyHidden });

  setBackground = image => this.setState({ background: image[0].preview });

  get style() {
    const { background } = this.state;

    return { backgroundImage: `url('${background}')` };
  }

  render() {
    const { bodyHidden } = this.state;

    return (
      <div id="Home">
        <div
          className={classnames('Home-header', { 'body-hidden': bodyHidden })}
          style={this.style}
        >
          <Dropzone
            className="dropzone"
            acceptClassName="accept"
            accept="image/*"
            disableClick
            onDropAccepted={this.setBackground}
          >
            <Clock large={bodyHidden} />
          </Dropzone>
          <Button className="Home-toggle" onClick={this.toggleBody} fullWidth>
            <Chevron up={bodyHidden} down={!bodyHidden} />
          </Button>
        </div>
        <div className={classnames('Home-body', { 'body-hidden': bodyHidden })}>
          <Dashboard />
          <Social />
        </div>
      </div>
    );
  }
}

export default Home;
