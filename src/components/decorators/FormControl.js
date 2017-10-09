import React from 'react';
import { object, string, bool, shape } from 'prop-types';
import classnames from 'classnames';

import './FormControl.css';

export default C => {
  const CC = ({ input, label, meta: { touched, error }, ...props }) => (
    <div className="form-control-wrapper">
      <label>{label}</label>
      <C
        {...input}
        {...props}
        className={classnames('form-control', error && 'has-error')}
      />
      {touched && error && <span className="form-error">{error}</span>}
    </div>
  );

  CC.propTypes = {
    input: object,
    label: string,
    meta: shape({
      touched: bool,
      error: string,
    }),
  }

  CC.displayName = 'Hidable.' + C.displayName;

  return CC;
}