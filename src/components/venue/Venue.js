import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import './Venue.css';


class Map extends Component {
  state = {
    lat: 6.551430799999999,
    lng: 3.3768400000000156,
    zoom: 13
  }

  componentDidMount() {
    // Todo: find an alternative way to implement this behaviour
    // useful link: https://github.com/PaulLeCam/react-leaflet/issues/420

    setTimeout(() => {
      document.querySelector('.leaflet-marker-icon').click()
    }, 500)
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            The Zone (Lagos, Nigeria)
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default () => (
  <div id="venue">
    <h2 className="side-panel__header-title">
      Venue
    </h2>
    <Map />
    <div className="side-panel__content">
      <h3>
        The Zone,
        Gbagada, Lagos
      </h3>

      <p>
        The 2018 React Summit will take place at the Zone,
        Plot 9 Gbagada express way besides UPS, Lagos.
      </p>
    </div>
  </div>
);
