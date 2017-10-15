import React from 'react'
import { bool } from 'prop-types'
import classnames from 'classnames'

import './Star.css';

const Star = ({ hover, active }) => (
  <i
    className={classnames('fa', {
      Star: true,
      hover,
      active,
      'fa-star': active,
      'fa-star-o': !active,
    })}
  />
);

Star.propTypes = {
  hover: bool,
  active: bool,
};

export default Star;