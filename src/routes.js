import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router'

import {
  App,
  Home,
  About,
  Calendars,
  Events
} from './containers/index';

export default (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="calendars" component={Calendars} />
        <Route path="about" component={About} />
        <Route path="events" component={Events}>
          <Route path="/events/:calendarId" component={Events}/>
        </Route>
      </Route>
    </Router>
);