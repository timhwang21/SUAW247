import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, bool, func } from 'prop-types';
import classnames from 'classnames';

import Clock from '../../components/Clock';
import Dropzone from '../../components/Dropzone';
import { Button } from '../../components/buttons';
import { Chevron } from '../../components/icons';
import {
  isBodyHidden,
  openBody,
  closeBody,
  toggleBody,
} from '../../modules/ui';

import Dashboard from './components/Dashboard';
import Social from './components/Social';

import './Home.css';

const mapStateToProps = state => ({
  bodyHidden: isBodyHidden(state),
});

const mapDispatchToProps = {
  openBody,
  closeBody,
  toggleBody,
};

class Home extends Component {
  static propTypes = {
    match: object,
    bodyHidden: bool,
    openBody: func,
    toggleBody: func,
  };

  state = {
    background: null,
  };

  componentWillMount() {
    const { openBody } = this.props;

    this.atNestedRoute && openBody();
  }

  get atNestedRoute() {
    const { match } = this.props;

    return match.params.view && match.params.view !== 'login';
  }

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
            <Clock large={bodyHidden} />
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
