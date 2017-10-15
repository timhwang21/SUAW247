import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const notFoundCode = '/404';

const RedirectTo404 = () => <Redirect to={notFoundCode} />;

const Route404 = () => <Route component={RedirectTo404} />;

export default Route404;
