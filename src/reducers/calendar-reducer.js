import * as actions from '../actions/calendar-actions';

const initialState = [];

/**
 * Reducer principal des actions liés aux calendrier.
 * @param state
 * @param action
 * @returns {*}
 */
function reducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case actions.LOAD_CALENDAR_REQUEST:
      return { ...state, fetching_calendar:true };
    case actions.LOAD_CALENDAR_SUCCESS:
      return { ...state, fetching_calendar:false, response:action.response };
    case actions.LOAD_CALENDAR_FAILURE:
      return { ...state, fetching_calendar:false, error:action.error };
    default:
      return state;
  }
}

export default reducer;