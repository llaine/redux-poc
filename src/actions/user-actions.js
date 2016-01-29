export const CONNECT_USER_REQUEST = 'connect user request';
export const CONNECT_USER_SUCCESS = 'connect user success';
export const CONNECT_USER_FAILURE = 'connect user failure';

export function authenticateUser() {
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