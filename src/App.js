import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './features/Home';
import NotFound from './features/NotFound';

import { Route404 } from './components/routes';
import { LogIn } from './components/auth';

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">Shut Up & Write 24/7</header>
    <Switch>
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/404" component={NotFound} />
      <Route path="/" component={Home}/>
      <Route404/>
    </Switch>
  </div>
);

export default App;
