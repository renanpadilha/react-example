import React, { Component } from 'react';

export default class Map extends Component {
  render() {
    return (
      <div className="map-responsive">
        <iframe 
          frameBorder={0}
          width="100%" 
          style={{border:0}}
          src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyCDqUxxNimU_mpeLnYo6ocGxpN-Wylx7Sw&q=" + this.props.latitude + "," + this.props.longitude } 
          allowFullScreen>
        </iframe>
      </div>
    )
  }
}