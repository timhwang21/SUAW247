import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import { Panel, NavBar } from '../../../../components/layout';
import { NavLink } from '../../../../components/links';
import Now from './components/Now';
import Today from './components/Today';
import Week from './components/Week';

import './Dashboard.css';

const Dashboard = () => (
  <Panel withNav id="Dashboard">
    <NavBar id="Dashboard-NavBar">
      <NavLink to="/now">Now</NavLink>
      <NavLink to="/today">Today</NavLink>
      <NavLink to="/week">This Week</NavLink>
    </NavBar>
    <Route exact path="/(now)?" component={Now} />
    <Route path="/today" component={Today} />
    <Route path="/week" component={Week} />
  </Panel>
);

export default withRouter(Dashboard);
