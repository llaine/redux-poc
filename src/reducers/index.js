import { combineReducers } from 'redux'

import CalendarReducer from './calendar-reducer';
import UserReducer from './user-reducer';
import EventReducer from './event-reducer';

export default combineReducers({
  user:UserReducer,
  calendar:CalendarReducer,
  events: EventReducer
});


