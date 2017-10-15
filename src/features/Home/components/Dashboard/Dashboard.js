import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import { LogInPage } from '../../../../components/auth';
import { AuthenticatedRoute } from '../../../../components/routes';
import { Panel, NavBar } from '../../../../components/layout';
import { NavLink } from '../../../../components/links';

import Now from './components/Now';
import Today from './components/Today';
import Week from './components/Week';

import './Dashboard.css';

const Dashboard = () => (
  <Panel withNav id="Dashboard">
    <NavBar id="Dashboard-NavBar">
      <NavLink to="/now" index>
        Now
      </NavLink>
      <NavLink to="/today">Today</NavLink>
      <NavLink to="/week">This Week</NavLink>
    </NavBar>
    <AuthenticatedRoute exact path="/(now)?" component={Now} />
    <AuthenticatedRoute path="/today" component={Today} />
    <AuthenticatedRoute path="/week" component={Week} />
    <Route path="/login" component={LogInPage} />
  </Panel>
);

export default withRouter(Dashboard);
