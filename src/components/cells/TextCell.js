import React from 'react';
import { string } from 'prop-types';

import './TextCell.css';

const TextCell = ({ value }) => (
  <div className="text-cell" title={value}>
    {value}
  </div>
);

TextCell.displayName = 'Cells.TextCell';

TextCell.propTypes = {
  value: string,
};

export default TextCell;
