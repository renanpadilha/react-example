import React, { Component } from 'react';

export default class TarefaTitle extends Component {
  render() {
    return (
      <div className="title">
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}