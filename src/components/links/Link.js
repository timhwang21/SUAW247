import React from 'react';
import { string } from 'prop-types';
import classnames from 'classnames';
import { Link as RouterLink } from 'react-router-dom'

import { hidable } from '../decorators';

import './Link.css';

const Link = ({ className, ...props }) => (
  <RouterLink {...props} className={classnames('Link', className)} />
);

Link.propTypes = {
  className: string,
};

Link.displayName = 'Link';

export default hidable(Link);