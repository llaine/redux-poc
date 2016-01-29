import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
        <div>
          <Link to="/">Home</Link><Link to="/about">About</Link>
          <div>{this.props.children}</div>
        </div>
    )
  }
}