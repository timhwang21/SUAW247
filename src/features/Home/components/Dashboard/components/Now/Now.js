import React, { Component } from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { Panel } from '../../../../../../components/layout';
import { Button } from '../../../../../../components/buttons';
import { Input, Scale } from '../../../../../../components/form';
import { required } from '../../../../../../utils/validations';

import './Now.css';

const config = {
  form: 'nowForm',
  onSubmit: values => {
    debugger;
    console.log(values);
  },
};

class Now extends Component {
  static propTypes = {
    handleSubmit: func,
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Panel id="Now">
        <form onSubmit={handleSubmit}>
          <Field
            name="goal"
            label="Goal"
            component={Input}
            large
            validate={required}
          />
          <Field
            name="accomplishment"
            label="Accomplishment"
            component={Input}
            large
          />
          <Field name="productivity" label="Productivity" component={Scale} />
          <Field name="focus" label="Focus" component={Scale} />
          <Button form submit>
            Save
          </Button>
        </form>
      </Panel>
    );
  }
}

export default reduxForm(config)(Now);
