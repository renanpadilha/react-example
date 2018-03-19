import React, { Component } from 'react';

export default class AddressRow extends Component {
  render() {
    return (
      <div className="addressRow">
        <span className="float-right">{this.props.endereco} <i className="fas fa-map-marker"></i></span>
      </div>
    )
  }
}