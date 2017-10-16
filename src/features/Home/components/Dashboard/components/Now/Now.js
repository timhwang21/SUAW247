import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

import { postShape } from '../../../../../../propTypes';
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
    handleSubmit: func,
    createPost: func,
    updatePost: func,
    pristine: bool,
    submitting: bool,
    submitSucceeded: bool,
  };

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
        <form onSubmit={handleSubmit(this.onSubmit)} autoComplete="off">
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
        </form>
      </Panel>
    );
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
  reduxForm(config),
)(Now);
