import * as actions from '../actions/event-actions';

const initialState = {};

/**
 * Reducer principal des actions liés aux events sur un calendrier.
 * @param state
 * @param action
 * @returns {*}
 */
function reducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case actions.LOAD_EVENTS_REQUEST:
      return { ...state, fetching_events:true, calendarId: action.calendarId };
    case actions.LOAD_EVENTS_SUCCESS:
      return { ...state, fetching_events:false, response:action.response, calendarId: action.calendarId };
    case actions.LOAD_EVENTS_FAILURE:
      return { ...state, fetching_events:false, error:action.error, calendarId: action.calendarId };
    default:
      return state;
  }
}

export default reducer;