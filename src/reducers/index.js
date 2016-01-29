import { combineReducers } from 'redux'

import CalendarReducer from './calendar-reducer';
import UserReducer from './user-reducer';

export default combineReducers({
  user:UserReducer,
  calendar:CalendarReducer
});


