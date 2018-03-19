import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <a className="btn" href={this.props.href} onClick={this.props.click}>
        {this.props.children}
      </a>
    )
  }
}