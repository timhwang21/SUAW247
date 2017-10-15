import React from 'react';
import { bool } from 'prop-types';

export default C => {
  const CC = ({ hidden, ...props }) => (hidden ? null : <C {...props} />);

  CC.propTypes = {
    hidden: bool,
  };

  CC.displayName = 'Hidable.' + C.displayName;

  return CC;
};
