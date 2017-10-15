import React from 'react';

import { Link } from '../../components/links';

import './NotFound.css';

const NotFound = () => (
  <div id="not-found">
    <div id="not-found-title">Not Found</div>
    <Link to="/">Back</Link>
  </div>
);

export default NotFound;
