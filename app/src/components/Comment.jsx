import React, { Component } from 'react';

export default class Comment extends Component {

  renderRating() {
    let stars = []
    for (let i = 0; i < this.props.nota; i++) {
      stars.push(<i className="fas fa-star"></i>)
    }
    return stars
  }

  render() {
    return (
      <div>
        <div className="media">
          <img src={this.props.urlFoto} alt="Usuário" />
          <div className="media-body">
            <p>{this.props.nome} 
              <span className="comment-qualification">
                { 
                  this.renderRating()
                }
              </span> 
            </p>
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