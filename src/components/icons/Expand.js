import React from 'react'
import { bool } from 'prop-types'
import classnames from 'classnames'

const Expand = ({ active }) => (
  <i
    className={classnames('fa', {
      'fa-plus-square': active,
      'fa-plus-square-o': !active,
    })}
  />
);

Expand.propTypes = {
  active: bool,
};

export default Expand;