import React, { Component } from 'react';

export default class Comment extends Component {
  render() {
    return (
      <div>
        <div className="media">
          <img src={this.props.urlFoto} alt="Usuário" />
          <div className="media-body">
            <p>{this.props.nome} <span className="comment-qualification">{this.props.nota}</span> </p>
            <h5> <p>{this.props.titulo}</p> </h5>
            <p>
              {this.props.comentario}
            </p>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}