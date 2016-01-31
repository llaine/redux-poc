import React, { Component } from 'react';

export default class EventList extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    const list = this.props.events.map((event) => {
      return <div key={event.id}>
        <p><strong>{event.startDate}</strong></p>
        <p>{event.summary} {event.location}</p>
        <a target="_blank" href={event.link}>Plus d'informations</a>
      </div>
    });

    return (<div>{list}</div>)
  }
}