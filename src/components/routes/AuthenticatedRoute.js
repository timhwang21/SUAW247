import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import { getMaybeHasUser } from '../../modules/user';

const mapStateToProps = state => ({
  maybeHasUser: getMaybeHasUser(state),
});

const redirect = <Redirect to="/login" />;

class AuthenticatedRoute extends Component {
  static propTypes = {
    maybeHasUser: bool,
    render: func,
    component: func,
  };

  renderComponent = props => {
    const { component, ...rest } = this.props;

    return React.createElement(component, { ...props, ...rest });
  };

  renderFunc = props => {
    const { render, maybeHasUser } = this.props;

    if (!maybeHasUser) {
      return redirect;
    }

    const renderFn = render || this.renderComponent;

    return renderFn(props);
  };

  render() {
    return (
      <Route {...this.props} component={undefined} render={this.renderFunc} />
    );
  }
}

export default compose(withRouter, connect(mapStateToProps))(
  AuthenticatedRoute,
);
