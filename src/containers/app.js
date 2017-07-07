import React, { Component } from 'react';

import Map from '../components/map/';
import Profile from '../components/profile/';

import styles from '../style.scss';

class App extends Component {
  componentWillMount() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => { 
        store
      });
    }
  }
  render() {
    return(
      <div>
        {/*<Sidebar></Sidebar>*/}
        <Map></Map>
      </div>
    )
  }
}

export default App