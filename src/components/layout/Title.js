import React from 'react';
import { oneOfType, string, node } from 'prop-types';

import './Title.css';

const Title = ({ children }) => <div className="Title">{children}</div>;

Title.propTypes = {
  children: oneOfType([string, node]),
};

Title.displayName = 'Title';

export default Title;
