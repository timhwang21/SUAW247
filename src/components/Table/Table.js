import React from 'react';
import ReactTable from 'react-table';

import 'react-table/react-table.css';
import './Table.css';

const Table = props => <ReactTable {...props} resizable={false} />;

Table.displayName = 'Table';

export default Table;
