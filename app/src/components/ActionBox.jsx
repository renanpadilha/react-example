import React, { Component } from 'react';

export default class ActionBox extends Component {
  render() {
    return (
      <div>
        <div className="action-container">
            {this.props.children}
        </div>
        <hr />
      </div>
    )
  }
}