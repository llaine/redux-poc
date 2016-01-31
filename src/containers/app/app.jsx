import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { connectUser, authenticateUserSuccess } from '../../actions/user-actions';

class App extends Component {
  constructor() {
    super(...arguments)
  }

  connectUser() {
    const { dispatch } = this.props;
    dispatch(connectUser())
  }

  render() {
    let profileUser = (<p>You are connected</p>);
    let notConnected = (<p>You are not connected <button onClick={this.connectUser.bind(this)}>Connect</button></p>);

    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/calendars">Calendars</Link></li>
          { this.props.user.connected ? profileUser : notConnected}
        </ul>
        { this.props.user.connected ? this.props.children : null }
      </div>
    )
  }
}

export default connect(state => ({ user: state.user }))(App);