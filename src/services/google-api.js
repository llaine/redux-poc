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

export function loadCalendars() {
  return new Promise(function (resolve, reject) {
    gapi.client.load('calendar', 'v3', function() {
      const request = gapi.client.calendar.calendarList.list();
      request.execute(
        function(resp){
          resolve(resp.items);
        },
        function(error) {
          reject(error);
        }
      );
    });
  });
}