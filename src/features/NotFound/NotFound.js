import React from 'react';

import { Message } from '../../components/layout';
import { Link } from '../../components/links';

const NotFound = () => (
  <Message title="Not Found">
    <Link to="/">Back</Link>
  </Message>
);

NotFound.displayName = 'NotFound';

export default NotFound;
