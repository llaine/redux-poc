import { authenticateUser } from '../services/google-api';

export const CONNECT_USER_REQUEST = 'connect user request';
export const CONNECT_USER_SUCCESS = 'connect user success';
export const CONNECT_USER_FAILURE = 'connect user failure';

export function authenticateUserRequest() {
  return {
    type: CONNECT_USER_REQUEST
  }
}

export function authenticateUserSuccess() {
  return {
    type: CONNECT_USER_SUCCESS
  }
}

export function authenticateUserFailure(error) {
  return {
    type: CONNECT_USER_FAILURE,
    error
  }
}

export function connectUser() {
  return dispatch => {
    dispatch(authenticateUserRequest());
    authenticateUser(function(authResult) {
      if(authResult && !authResult.error) {
        dispatch(authenticateUserSuccess())
      } else {
        dispatch(authenticateUserFailure(authResult.error))
      }
    });
  }
}