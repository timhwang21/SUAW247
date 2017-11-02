import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, bool, func } from 'prop-types';
import classnames from 'classnames';

import Dropzone from '../../components/Dropzone';
import { Button } from '../../components/buttons';
import { Chevron } from '../../components/icons';
import { isBodyHidden, toggleBody } from '../../modules/ui';

import Clock from '../Clock';
import Dashboard from './components/Dashboard';
import Social from './components/Social';

import './Home.css';

const mapStateToProps = state => ({
  bodyHidden: isBodyHidden(state),
});

const mapDispatchToProps = {
  toggleBody,
};

class Home extends Component {
  static propTypes = {
    bodyHidden: bool,
    toggleBody: func,
  };

  state = {
    background: null,
  };

  setBackground = image => this.setState({ background: image[0].preview });

  get style() {
    const { background } = this.state;

    return { backgroundImage: `url('${background}')` };
  }

  render() {
    const { bodyHidden, toggleBody } = this.props;

    return (
      <div id="Home" className={classnames(bodyHidden && 'body-hidden')}>
        <div className="Home-header" style={this.style}>
          <Dropzone
            className="dropzone"
            acceptClassName="accept"
            accept="image/*"
            disableClick
            onDropAccepted={this.setBackground}
          >
            <Clock large={bodyHidden} onDoubleClick={toggleBody} />
          </Dropzone>
          <Button className="Home-toggle" onClick={toggleBody} fullWidth>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
