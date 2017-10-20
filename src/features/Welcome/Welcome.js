import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';

import Logo from '../../components/Logo';
import { Message } from '../../components/layout';
import { closeWelcome, isWelcomeHidden } from '../../modules/ui';

import './Welcome.css';

const mapStateToProps = state => ({
  welcomeHidden: isWelcomeHidden(state),
});

const mapDispatchToProps = {
  closeWelcome,
};

class Welcome extends Component {
  static propTypes = {
    welcomeHidden: bool,
    closeWelcome: func,
  };

  state = {
    showMessage: false,
  };

  componentDidMount() {
    const { closeWelcome } = this.props;

    setTimeout(this.showMessage, 500);
    setTimeout(closeWelcome, 2000);
  }

  showMessage = () => this.setState({ showMessage: true });

  get className() {
    const { welcomeHidden } = this.props;
    const { showMessage } = this.state;

    return classnames({
      noselect: true,
      hidden: welcomeHidden,
      'show-message': showMessage,
    });
  }

  render() {
    return (
      <div id="Welcome" className={this.className}>
        <Message title={<Logo />} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
