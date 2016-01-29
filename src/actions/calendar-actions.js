export const LOAD_CALENDAR_REQUEST = 'load calendar request';
export const LOAD_CALENDAR_SUCCESS = 'load calendar success';
export const LOAD_CALENDAR_FAILURE = 'load calendar failure';

export function loadCalendar() {
  return {
    type: LOAD_CALENDAR_REQUEST
  }
}

export function loadCalendarSuccess(response) {
  return {
    type: LOAD_CALENDAR_SUCCESS,
    response
  }
}

export function loadCalendarFailure(error) {
  return {
    type: LOAD_CALENDAR_FAILURE,
    error
  }
}