import React from 'react';
import { oneOfType, string, node } from 'prop-types';

import Title from './Title';

import './Message.css';

const Message = ({ title, children }) => (
  <div className="Message">
    <Title>{title}</Title>
    {children}
  </div>
);

Message.propTypes = {
  title: oneOfType([string, node]),
  children: oneOfType([string, node]),
};

Message.displayName = 'Message';

export default Message;
