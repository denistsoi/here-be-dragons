<template>
  <div id="mapbox-item">
  </div>  
</template>

<script>
import mapboxgl from 'mapbox-gl';
import { mapGetters } from 'vuex';
import { 
  generateMarkers,
  generateMarker,
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
      marker: null,
      requesting: false,
    }
  },
  computed: {
    map: {
      get: function () {
        return this.$store.state.map;
      }
    },
    route: {
      get: function() {
        return this.$store.state.route;
      }
    },
  },
  mounted() {
    const store = this.$store;

    store.commit('loading', true);
    store.dispatch('loadMap');

    // update route whenever route is set
    store.watch(store.getters.route, (route) => {
      const map = this.map;

      if (!map.getSource('route')) {
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
        
        let path = setTemplate(route);
        return map.addLayer(path)
      }

      map.getSource('route').setData({
        type: 'Feature',
        properties: {},
        geometry: route 
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
  opacity: .9;
}

.pin .circle {
  width: 14px;
  height: 14px;
  margin: 8px 0 0 8px;
  background: #2f2f2f;
  position: absolute;
  border-radius: 50%;
}
</style>