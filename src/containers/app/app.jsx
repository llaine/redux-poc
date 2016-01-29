import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
        <div>
          <a href="/">Home</a><a href="/about">About</a>
          <div>{this.props.children}</div>
        </div>
    )
  }
}