import React, { Component } from 'react';
import { string, bool, func } from 'prop-types';
import omit from 'lodash/fp/omit';

import Button from './Button';

class SaveButton extends Component {
  static propTypes = {
    className: string,
    update: bool,
    pristine: bool,
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
    const { submitSucceeded } = this.props;

    const success = !submitSucceeded && nextProps.submitSucceeded;

    if (success) {
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
    const { update } = this.props;
    const { success } = this.state;

    const text = update ? 'Update' : 'Save';

    return success ? 'Saved!' : text;
  }

  get buttonProps() {
    return omit(['submitting', 'submitSucceeded'], this.props);
  }

  render() {
    const { pristine, className, submitting } = this.props;

    return (
      <Button
        {...this.buttonProps}
        submit
        className={className}
        disabled={pristine || submitting}
        onMouseEnter={this.handleMouseEnter}
      >
        {this.label}
      </Button>
    );
  }
}

export default SaveButton;
