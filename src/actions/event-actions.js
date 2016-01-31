import { loadEvents as loadEventsService } from '../services/google-api';

export const LOAD_EVENTS_REQUEST = 'load events request';
export const LOAD_EVENTS_SUCCESS = 'load events success';
export const LOAD_EVENTS_FAILURE = 'load events failure';


export function loadEvents(calendarId) {
  return {
    type: LOAD_EVENTS_REQUEST,
    calendarId
  }
}

export function loadEventsSuccess(calendarId, response) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    calendarId,
    response
  }
}

export function loadEventsFailure(calendarId, error) {
  return {
    type: LOAD_EVENTS_FAILURE,
    calendarId,
    error
  }
}

export function fetchEventsFromCalendar(calendarId) {
  return dispatch => {
    dispatch(loadEvents(calendarId));
    loadEventsService(calendarId)
      .then((response) => {
        dispatch(loadEventsSuccess(calendarId, response))
      })
      .catch((error) => {
        dispatch(loadEventsFailure(calendarId, error))
      });
  }
}
