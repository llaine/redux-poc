const CLIENT_ID = '407102783207-cfilj8ul82ipdigkcr0osdr14pvqg9hh.apps.googleusercontent.com';
const SCOPES = ['https://www.googleapis.com/auth/calendar'];

export function authenticateUser(callback) {
  const params = {
    'client_id': CLIENT_ID,
    'scope': SCOPES.join(' '),
    'immediate': false
  };

  gapi.auth.authorize(params, callback);
}