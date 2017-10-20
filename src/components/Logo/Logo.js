import React from 'react';
import { bool } from 'prop-types';

import './Logo.css';

const smallHeader = (
  <div>
    <span>SUA</span>
    <span id="Write">W</span>
    <span>247</span>
  </div>
);

const largeHeader = (
  <div>
    <span>{'Shut Up & '}</span>
    <span id="Write">Write</span>
    <span>{' 24/7'}</span>
  </div>
);

const Logo = ({ small }) => (small ? smallHeader : largeHeader);

Logo.displayName = 'Logo';

Logo.propTypes = {
  small: bool,
};

export default Logo;
