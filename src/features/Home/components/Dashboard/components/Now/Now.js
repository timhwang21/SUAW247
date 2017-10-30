import React, { Component } from 'react';
import { bool, func, number } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm, Form } from 'redux-form';
import isEmpty from 'lodash/isEmpty';

import { postShape } from '../../../../../../propTypes';
import { getBreakEnding } from '../../../../../../modules/clock';
import {
  createPost,
  updatePost,
  getPostCount,
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

const mapStateToProps = state => {
  const activePost = getActivePost(state);

  return {
    breakEnding: getBreakEnding(state),
    hasActivePost: !isEmpty(activePost),
    initialValues: activePost,
    postCount: getPostCount(state),
  };
};

const mapDispatchToProps = {
  createPost,
  updatePost,
};

class Now extends Component {
  static propTypes = {
    breakEnding: bool,
    createPost: func,
    handleSubmit: func,
    hasActivePost: bool,
    initialValues: postShape,
    postCount: number,
    pristine: bool,
    submit: func,
    submitSucceeded: bool,
    submitting: bool,
    updatePost: func,
    valid: bool,
  };

  componentWillReceiveProps(nextProps) {
    const { hasActivePost, breakEnding, valid, submit } = this.props;

    // If break is about to end, there is no active post, and the current form
    // values are valid, submit the form for the user
    !breakEnding &&
      nextProps.breakEnding &&
      valid &&
      !hasActivePost &&
      submit();
  }

  get title() {
    const { hasActivePost, postCount } = this.props;

    return `Session #${hasActivePost ? postCount : postCount + 1}`;
  }

  onSubmit = values => {
    const { hasActivePost, updatePost, createPost } = this.props;

    return hasActivePost ? updatePost(values) : createPost(values);
  };

  render() {
    const {
      hasActivePost,
      handleSubmit,
      pristine,
      submitting,
      submitSucceeded,
    } = this.props;

    return (
      <Panel id="Now" title={this.title}>
        <Form onSubmit={handleSubmit(this.onSubmit)} autoComplete="off">
          <Field
            name="goal"
            label="Goal"
            component={Input}
            validate={required}
            large
            autoFocus
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
            update={hasActivePost}
          />
        </Form>
      </Panel>
    );
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm(config),
)(Now);
