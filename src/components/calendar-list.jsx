import React, { Component } from 'react';

export default class CalendarList extends Component {
  constructor() {
    super(...arguments)
  }

  render() {

    const hrefStyle = {
      color:'black',
      textDecoration:'underline',
      cursor:'pointer'
    };

    const calendarList = this.props.calendars.map((calendar) => {

      const divStyle = { backgroundColor: calendar.backgroundColor };

      return (
          <div key={calendar.id}>
            <div className="panel panel-default calendar-item">
              <div className="panel-body" style={divStyle}>
                <div>
                  {calendar.description} - {calendar.summary}
                </div>
              </div>
            </div>
          </div>
      )
    });

    return (<div>{calendarList}</div>)
  }
}

