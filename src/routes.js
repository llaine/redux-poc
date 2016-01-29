import React from 'react';
import { Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import {
  App,
  Home,
  About
} from './containers/index';


export default (
    <Router history={createBrowserHistory()}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="about" component={App}/>
      </Route>
    </Router>
);