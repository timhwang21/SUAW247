import React, { Component } from 'react';

import Clock from '../../components/Clock';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <div className="Home-header">
          <Clock/>
        </div>
        <div className="Home-body">
        </div>
      </div>
    );
  }
}

export default Home;