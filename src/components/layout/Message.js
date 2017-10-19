import React from 'react';
import { oneOfType, string, node } from 'prop-types';

import './Message.css';

const Message = ({ title, children }) => (
  <div className="Message">
    <div className="Message-title">{title}</div>
    {children}
  </div>
);

Message.propTypes = {
  title: oneOfType([string, node]),
  children: oneOfType([string, node]),
};

Message.displayName = 'Message';

export default Message;
