import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

import { createPost } from '../../../../../../modules/posts';
import { Panel, Row } from '../../../../../../components/layout';
import { SaveButton } from '../../../../../../components/buttons';
import { Input, Scale } from '../../../../../../components/form';
import { required } from '../../../../../../utils/validations';

import './Now.css';

const config = {
  form: 'nowForm',
  destroyOnUnmount: false,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(createPost(values)),
});

class Now extends Component {
  static propTypes = {
    handleSubmit: func,
    submitting: bool,
    submitSucceeded: bool,
  };

  render() {
    const { handleSubmit, submitting, submitSucceeded } = this.props;

    return (
      <Panel id="Now">
        <form onSubmit={handleSubmit}>
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
            submitting={submitting}
            submitSucceeded={submitSucceeded}
          />
        </form>
      </Panel>
    );
  }
}

export default compose(connect(null, mapDispatchToProps), reduxForm(config))(
  Now,
);
