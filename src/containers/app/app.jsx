import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
        <div>
          <p>Welcome to my website!</p>
          <div>{this.props.children}</div>
        </div>
    )
  }
}