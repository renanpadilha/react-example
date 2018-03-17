import React, { Component } from 'react';

export default class CommentBox extends Component {
  render() {
    return (
      <div>
        <div className="comments">
          {this.props.children}
        </div>
      </div>
    )
  }
}