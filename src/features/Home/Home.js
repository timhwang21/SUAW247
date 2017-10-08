import React, { Component } from 'react';
import classnames from 'classnames';

import Clock from '../../components/Clock';
import { FlatButton } from '../../components/buttons';
import { Chevron } from '../../components/icons';

import './Home.css';

import Dashboard from './components/Dashboard';
import Social from './components/Social';

class Home extends Component {
  state = {
    bodyHidden: false,
  };

  toggleBody = () => this.setState({ bodyHidden: !this.state.bodyHidden });

  render() {
    const { bodyHidden } = this.state;

    return (
      <div id="Home">
        <div className={classnames('Home-header', { 'body-hidden': bodyHidden })}>
          <Clock/>
          <FlatButton onClick={this.toggleBody}>
            <Chevron up={bodyHidden} down={!bodyHidden}/>
          </FlatButton>
        </div>
        <div className={classnames('Home-body', { 'body-hidden': bodyHidden })}>
          <Dashboard/>
          <Social/>
        </div>
      </div>
    );
  }
}

export default Home;