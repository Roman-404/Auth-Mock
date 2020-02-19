import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home/home';
import Auth from './auth';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/auth'} component={Auth} />
        </Switch>
      </BrowserRouter>
    );
  };
};
