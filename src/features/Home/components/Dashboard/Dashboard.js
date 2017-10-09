import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'

import { Panel, NavBar } from '../../../../components/layout';
import { NavLink } from '../../../../components/links';

import './Dashboard.css';

class Dashboard extends Component {
  render() {
    // Not implemented

    return (
      <Panel id="Dashboard">
        <NavBar id="Dashboard-NavBar">
          <NavLink to="/now">Now</NavLink>
          <NavLink to="/today">Today</NavLink>
          <NavLink to="/week">This Week</NavLink>
        </NavBar>
        <Route exact path="/(now)?" render={() => <div>Now</div>}/>
        <Route path="/today" render={() => <div>Today</div>}/>
        <Route path="/week" render={() => <div>Week</div>}/>
      </Panel>
    );
  }
}

export default withRouter(Dashboard);