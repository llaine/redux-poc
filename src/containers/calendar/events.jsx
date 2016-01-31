import React, { Component } from 'react';
import { connect } from 'react-redux';

class Events extends Component {
  constructor() {
    super(...arguments)
  }

  componentDidMount() {
    console.log(this.props.params.calendarId);
  }

  render() {
    return <p>WIP</p>
  }
}

export default connect(state => ({ events: state.events }))(Events);