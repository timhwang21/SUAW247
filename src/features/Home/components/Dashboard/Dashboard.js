import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, withRouter } from 'react-router-dom';

// import { getIsBreak } from '../../../../modules/clock';
import { LogInPage } from '../../../../components/auth';
import { AuthenticatedRoute } from '../../../../components/routes';
import { Panel, NavBar } from '../../../../components/layout';
import { NavLink } from '../../../../components/links';

import Now from './components/Now';
import Today from './components/Today';
import Week from './components/Week';

import './Dashboard.css';

const mapStateToProps = () => ({
  isBreak: true,
  // isBreak: getIsBreak(state),
});

const Dashboard = ({ isBreak }) => (
  <Panel withNav id="Dashboard">
    <NavBar id="Dashboard-NavBar">
      <NavLink to="/now" index>
        Now
      </NavLink>
      <NavLink to="/today" disabled={!isBreak}>
        Today
      </NavLink>
      <NavLink to="/week" disabled>
        This Week
      </NavLink>
    </NavBar>
    <AuthenticatedRoute exact path="/(now)?" component={Now} />
    <AuthenticatedRoute path="/today" component={Today} />
    <AuthenticatedRoute path="/week" component={Week} />
    <Route path="/login" component={LogInPage} />
  </Panel>
);

Dashboard.propTypes = {
  isBreak: bool,
};

Dashboard.displayName = 'Dashboard';

export default compose(withRouter, connect(mapStateToProps))(Dashboard);
