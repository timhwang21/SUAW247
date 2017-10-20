import React from 'react';
import MediaQuery from 'react-responsive';

const TABLET = 992;
const MOBILE = 768;

/* eslint-disable react/prop-types */
export const Desktop = ({ children }) => (
  <MediaQuery minWidth={TABLET + 1}>{children}</MediaQuery>
);
export const Tablet = ({ children }) => (
  <MediaQuery minWidth={MOBILE + 1} maxWidth={TABLET}>
    {children}
  </MediaQuery>
);
export const Mobile = ({ children }) => (
  <MediaQuery maxWidth={MOBILE}>{children}</MediaQuery>
);
export const Default = ({ children }) => (
  <MediaQuery minWidth={MOBILE + 1}>{children}</MediaQuery>
);
