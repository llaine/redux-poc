import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventList from '../../components/event-list.jsx';
import { fetchEventsFromCalendar } from '../../actions/event-actions';

class Events extends Component {
  constructor() {
    super(...arguments)
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEventsFromCalendar(this.props.params.calendarId));
  }

  render() {
    return (<div>
      {
        this.props.events.fetching_events ?
            `Loading event for ${this.props.params.calendarId} ...` :
            this.props.events.error ? '<h1>An error occured please try again later</h1>' :
            <EventList events={this.props.events.response} />
      }
    </div>)
  }
}

export default connect(state => ({ events: state.events }))(Events);