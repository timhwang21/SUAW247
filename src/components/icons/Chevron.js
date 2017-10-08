import React from 'react'
import { bool } from 'prop-types'
import classnames from 'classnames'

const Chevron = ({
  up,
  down,
  left,
  right
}) => (
  <i
    className={classnames('fa', {
      'fa-chevron-up': up,
      'fa-chevron-down': down,
      'fa-chevron-left': left,
      'fa-chevron-right': right
    })}
  />
);

Chevron.propTypes = {
  up: bool,
  down: bool,
  left: bool,
  right: bool,
};

export default Chevron;