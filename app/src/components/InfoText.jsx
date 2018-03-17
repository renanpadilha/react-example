import React, { Component } from 'react';

export default class InfoText extends Component {
  render() {
    return (
      <div className="info-text">
        <p>
          {this.props.children}
          </p>
      </div>
    )
  }
}