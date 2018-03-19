import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render () {
    return (
      <nav className="nav">
        <Link className="btn-back" to={`/`}> <i className="fas fa-caret-left"></i> </Link>
        <span className="icon-header white"></span>
        <div className="nav-text"> {this.props.cidade} - {this.props.bairro}</div>
        <button type="submit" className="btn-search"></button>
      </nav>
    )
  }
}