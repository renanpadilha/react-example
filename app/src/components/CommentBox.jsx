import React, { Component } from 'react';

export default class CommentBox extends Component {
  render() {
    return (
      <div id="comments" className="comments">
        {this.props.children}
      </div>
    )
  }
}