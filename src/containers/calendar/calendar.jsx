import React, { Component } from 'react';
import { connect } from 'react-redux';

import CalendarList from '../../components/calendar-list.jsx';

import { fetchCalendars } from '../../actions/calendar-actions';
import { fetchEventsFromCalendar } from '../../actions/event-actions';

class Calendar extends Component {
  constructor() {
    super(...arguments)
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCalendars())
  }

  render() {
    return (
      <div>
        { this.props.calendars.fetching_calendar ?
            'Loading calendars ... ' :
            <CalendarList calendars={this.props.calendars.response} />
        }
      </div>
    );
  }
}

export default connect(state => ({ calendars: state.calendar }))(Calendar);