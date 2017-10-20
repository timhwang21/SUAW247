import React from 'react';
import { bool } from 'prop-types';

import './Logo.css';

const smallHeader = (
  <div className="Logo Logo-small">
    <span>SUA</span>
    <span className="Logo-write">W</span>
    <span className="Logo-number">24/7</span>
  </div>
);

const largeHeader = (
  <div className="Logo">
    <span>{'Shut Up & '}</span>
    <span className="Logo-write">Write</span>
    <span>{' 24/7'}</span>
  </div>
);

const Logo = ({ small }) => (small ? smallHeader : largeHeader);

Logo.displayName = 'Logo';

Logo.propTypes = {
  small: bool,
};

export default Logo;
