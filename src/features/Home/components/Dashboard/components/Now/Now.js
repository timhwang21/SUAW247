import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm, Form } from 'redux-form';

import { postShape } from '../../../../../../propTypes';
import { getBreakEnding } from '../../../../../../modules/clock';
import {
  createPost,
  updatePost,
  getActivePost,
} from '../../../../../../modules/posts';
import { Panel, Row } from '../../../../../../components/layout';
import { SaveButton } from '../../../../../../components/buttons';
import { Input, Scale } from '../../../../../../components/form';
import { required } from '../../../../../../utils/validations';

import './Now.css';

const config = {
  form: 'nowForm',
  destroyOnUnmount: false,
  enableReinitialize: true,
};

const mapStateToProps = state => ({
  activePost: getActivePost(state),
  breakEnding: getBreakEnding(state),
});

const mapDispatchToProps = {
  createPost,
  updatePost,
};

const mergeProps = ({ activePost }, dispatchProps, ownProps) => ({
  ...ownProps,
  ...dispatchProps,
  activePost,
  initialValues: activePost,
});

class Now extends Component {
  static propTypes = {
    activePost: postShape,
    breakEnding: bool,
    createPost: func,
    handleSubmit: func,
    pristine: bool,
    submit: func,
    submitSucceeded: bool,
    submitting: bool,
    updatePost: func,
    valid: bool,
  };

  componentWillReceiveProps(nextProps) {
    const { activePost, breakEnding, valid, submit } = this.props;

    // If break is about to end, there is no active post, and the current form
    // values are valid, submit the form for the user
    !breakEnding && nextProps.breakEnding && valid && !activePost && submit();
  }

  onSubmit = values => {
    const { activePost, updatePost, createPost } = this.props;

    return activePost ? updatePost(values) : createPost(values);
  };

  render() {
    const {
      activePost,
      handleSubmit,
      pristine,
      submitting,
      submitSucceeded,
    } = this.props;

    return (
      <Panel id="Now">
        <Form onSubmit={handleSubmit(this.onSubmit)} autoComplete="off">
          <Field
            name="goal"
            label="Goal"
            component={Input}
            validate={required}
            large
          />
          <Field
            name="accomplishment"
            label="Accomplishment"
            component={Input}
            large
          />
          <Row>
            <Field
              name="productivity"
              label="Productivity"
              component={Scale}
              small
            />
            <Field name="focus" label="Focus" component={Scale} small />
          </Row>
          <SaveButton
            pristine={pristine}
            submitting={submitting}
            submitSucceeded={submitSucceeded}
            update={!!activePost}
          />
        </Form>
      </Panel>
    );
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
  reduxForm(config),
)(Now);
