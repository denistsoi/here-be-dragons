import React, { Component } from 'react';

import mapstyles from './mapstyles';
import mapboxgl from 'mapbox-gl';

import styles from './style.scss';

class Map extends Component {
  componentDidMount() {

    let map = new mapboxgl.Map({
      container: 'map',
      style: mapstyles
    })

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
  }
  render() {
    return ( 
      <div>
        <div id="map"></div>
      </div>
    )
  }
};

export default Map;