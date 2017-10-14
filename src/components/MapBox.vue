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
    store.watch( state => {
      return state.waypoints;
    }, ()=>{
      // get waypoints from mapbox
      
      let waypoints = store.getters.waypoints;
      // let waypoints = this.$store.getters.waypoints;
      
      let path = waypoints.map(waypoint => {
        let coord = [waypoint.longitude, waypoint.latitude].join(',');
        return coord;
      });

      let url = "https://api.mapbox.com/directions/v5/mapbox/driving/";
      
      let mapbox_url = `${url}${path.join(';')}?steps=true&alternatives=true&geometries=geojson&access_token=pk.eyJ1IjoiZGVuaXN0c29pIiwiYSI6ImNqNWRhNnozZzBoNGQzMm9oZ2sycG5xdmEifQ.rpJNzetOlSaCMaTPIHKXEA`;

      waypoints.forEach((waypoint, index) => {
        generateMarkers(map, index, waypoint)
      })

      if (waypoints.length >= 2) {
        // mapbox
        fetch(mapbox_url)
          .then(response => response.json())
          .then(data => {
            store.commit('saveRoute', data.routes[0].geometry);
          })
          .catch(err => {
            console.log('error', err);
          });
      }
    })

    // update route whenever route is set
    store.watch(state => {
      return state.route
    }, () => {

      if (!map.getSource('route')) {
        console.log('first route');
        function setTemplate(coordinates) {
          return {
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: coordinates
              }
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': "#CF653E",
              'line-width': 4
            }
          }
        }
        
        let path = setTemplate(store.getters.route);
        return map.addLayer(path)
      }

      console.log('second route');
      map.getSource('route').setData({
        type: 'Feature',
        properties: {},
        geometry: store.getters.route
      });
    });
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

.pin {
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 50% 0;
  background: $highlight-color;
  position: absolute;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -20px 0 0 -20px;
  -webkit-animation-name: bounce;
  -moz-animation-name: bounce;
  -o-animation-name: bounce;
  -ms-animation-name: bounce;
  animation-name: bounce;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  -o-animation-fill-mode: both;
  -ms-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  -o-animation-duration: 1s;
  -ms-animation-duration: 1s;
  animation-duration: 1s;
}
.pin .circle {
  // content: '';
  width: 14px;
  height: 14px;
  margin: 8px 0 0 8px;
  // border: #2f2f2f;
  background: #2f2f2f;
  position: absolute;
  border-radius: 50%;
}
</style>