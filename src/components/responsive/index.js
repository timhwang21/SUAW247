import React from 'react';
import MediaQuery from 'react-responsive';

/* eslint-disable react/prop-types */
export const Desktop = ({ children }) => <MediaQuery minWidth={992}>{children}</MediaQuery>;
export const Tablet = ({ children }) => <MediaQuery minWidth={768} maxWidth={992}>{children}</MediaQuery>;
export const Mobile = ({ children }) => <MediaQuery maxWidth={768}>{children}</MediaQuery>;
export const Default = ({ children }) => <MediaQuery minWidth={768}>{children}</MediaQuery>;
