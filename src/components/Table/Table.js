import React from 'react';
import ReactTable from 'react-table';

import 'react-table/react-table.css';

const Table = props => <ReactTable {...props} resizable={false} />;

Table.displayName = 'Table';

export default Table;
