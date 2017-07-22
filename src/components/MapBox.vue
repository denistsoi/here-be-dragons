<template>
  <div id="mapbox-item">
    <!--<div class="create-route">-->
      <!--<input placeholder="starting">
      <input placeholder="finish">-->
      <!--<button 
              v-bind:class="{ requesting: requesting, disabled: route }"
              v-bind:disabled="requesting || route"
              @click="getToken()">
        <span v-if="!route">{{ !requesting ? 'Request Route' : 'Requesting...' }}</span>
        <span v-if="route">{{ 'Route Generated' }}</span>
      </button>-->
      <!--<MessageBox :message="message"></MessageBox>
    </div>-->
  </div>  
</template>

<script>
import mapboxgl from 'mapbox-gl';
import { 
  generateMarkers,
  generatePath,
  handleResponse, 
  handleError,
  StatusCodes 
} from '../utils';

import MessageBox from './MessageBox';

export default {
  components: {
    MessageBox
  },
  data() {
    return {
      map: null,
      requesting: false,

    }
  },
  computed: {},
  mounted() {
    const store = this.$store;

    let bounds = [
      [113.23507613916462, 21.8603418729641],
      [115.05259007364214, 22.777303015462593]
    ];
    
    const map = new mapboxgl.Map({
      container: 'mapbox-item',
      style: 'https://openmaptiles.github.io/klokantech-basic-gl-style/style-cdn.json',
      zoom: 10,
      center: [114.1794, 22.2888],
      maxBounds: bounds
    });

    // add mapbox navigation
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // we want to reference this later
    this.$set(this, 'map', map);

    store.commit('loading', true);

    map.on('load', ()=> {
      store.commit('loading', false);
    });

    // use watch (but could use computed values)
    this.$store.watch( state => {
      return state.waypoints;
    }, ()=>{
      // get waypoints from mapbox
      
      let store = this.$store;
      let waypoints = store.getters.waypoints;
      
      if (waypoints.length >= 2) {
        let coordinates = waypoints.map(waypoint => {
            return [waypoint.longitude, waypoint.latitude]
        });

        // set initial line
        if (!map.getSource('route')) {
          let route = {
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'LineString',
                  coordinates: coordinates
                }
              }
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': "#ff0",
              'line-width': 4
            }
          };
          return map.addLayer(route)
        }

        map.getSource('route').setData({
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: coordinates
          }
        });
      }

    })
  },
}
</script>

<style lang="scss">

@import '../common-styles/vars';
@import '../common-styles/mixins';
@import '../common-styles/mapstyles';

#mapbox-item {
  min-height: calc(100vh);
  width: 100%;
}

.marker {
  background: black;
}
</style>