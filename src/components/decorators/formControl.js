import React from 'react';
import { object, string, bool, shape } from 'prop-types';
import classnames from 'classnames';

import './formControl.css';

export default C => {
  const CC = ({
    input,
    label,
    meta: { touched, error },
    small,
    large,
    ...props
  }) => (
    <div
      className={classnames({
        'form-control-wrapper': true,
        small,
        large,
      })}
    >
      <label>{label}</label>
      <div
        className={classnames(
          'form-control-container',
          touched && error && 'has-error',
        )}
      >
        <C {...input} {...props} className="form-control" />
        {touched && error && <span className="form-error">{error}</span>}
      </div>
    </div>
  );

  CC.propTypes = {
    input: object,
    label: string,
    meta: shape({
      touched: bool,
      error: string,
    }),
    small: bool,
    large: bool,
  };

  CC.displayName = 'FormControl.' + (C.displayName || C.name);

  return CC;
};
