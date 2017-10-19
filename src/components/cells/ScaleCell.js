import React from 'react';
import { number } from 'prop-types';

import Scale from '../Scale';

const ScaleCell = ({ value }) => <Scale value={value} disabled />;

ScaleCell.displayName = 'Cells.ScaleCell';

ScaleCell.propTypes = {
  value: number,
};

export default ScaleCell;
