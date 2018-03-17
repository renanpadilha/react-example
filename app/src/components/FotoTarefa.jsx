import React, { Component } from 'react';

export default class FotoTarefa extends Component {
  render() {
    return (
      <div className="photo-content">
        <img src={this.props.url} alt={this.props.imageAlt}/>
          {this.props.children}
        </div>
    )
  }
}