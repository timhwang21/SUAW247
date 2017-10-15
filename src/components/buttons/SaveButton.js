import React, { Component } from 'react';
import { string, bool, func } from 'prop-types';
import omit from 'lodash/fp/omit';

import Button from './Button';

class SaveButton extends Component {
  static propTypes = {
    className: string,
    submitting: bool,
    submitSucceeded: bool,
    onMouseEnter: func,
  };

  static defaultProps = {
    onMouseEnter: () => {},
  };

  state = {
    success: false,
  };

  componentWillReceiveProps(nextProps) {
    const { submitting } = this.props;

    const submitFinished = submitting && !nextProps.submitting;
    const success = nextProps.submitSucceeded;

    if (submitFinished && success) {
      this.setSuccess();
    }
  }

  setSuccess = () =>
    this.setState({ success: true }, () =>
      setTimeout(() => this.setState({ success: false }), 5000),
    );

  handleMouseEnter = e => {
    const { onMouseEnter } = this.props;

    this.setState({ success: false });

    onMouseEnter(e);
  };

  get label() {
    const { submitting } = this.props;
    const { success } = this.state;

    if (submitting) {
      return 'Saving...';
    } else if (success) {
      return 'Saved!';
    } else {
      return 'Save';
    }
  }

  get buttonProps() {
    return omit(['submitting', 'submitSucceeded'], this.props);
  }

  render() {
    const { className, submitting } = this.props;

    return (
      <Button
        {...this.buttonProps}
        submit
        className={className}
        disabled={submitting}
        onMouseEnter={this.handleMouseEnter}
      >
        {this.label}
      </Button>
    );
  }
}

export default SaveButton;
