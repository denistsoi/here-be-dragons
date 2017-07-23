<template>
  <div class="input-route">
        <vue-google-autocomplete
            ref="address"
            id="map"
            classname="form-control"
            placeholder="Please type your address"
            v-on:placechanged="getAddressData"
            country="hk">
        </vue-google-autocomplete>
  </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'

export default {
  components: { VueGoogleAutocomplete },
  data() {
    return {
      address: ''
    }
  },
  mounted() {
    // set focus to next inserted if adding waypoint 
    this.$refs.address.focus();
  },
  methods: {
    getAddressData (addressData, placeResultData) {
      this.address = addressData; 
      let store = this.$store;
      store.commit('saveWaypoint', this.address);

      let waypoints = this.$store.getters.waypoints;
      let path = waypoints.map(waypoint => {
        let coord = [waypoint.longitude, waypoint.latitude].join(',');
        return coord;
      });

      console.log(path);

      let url = "https://api.mapbox.com/directions/v5/mapbox/driving/";

      fetch(`${url}${path.join(';')}?steps=true&alternatives=true&geometries=geojson&access_token=pk.eyJ1IjoiZGVuaXN0c29pIiwiYSI6ImNqNWRhNnozZzBoNGQzMm9oZ2sycG5xdmEifQ.rpJNzetOlSaCMaTPIHKXEA`)
        .then(response => response.json())
        .then(data => {
          // console.log('hi')
          console.log(data)

          store.commit('saveRoute', data.routes[0].geometry);
          // let template = {
          //   id: 'route-path',
          //   type: 'line',
          //   source: {
          //     type: 'geojson',
          //     data: {
          //       type: 'Feature',
          //       properties: {},
          //       geometry: data.routes[0]
          //     }
          //   },
          //   layout: {
          //     'line-join': 'round',
          //     'line-cap': 'round'
          //   },
          //   paint: {
          //     'line-color': '#f3f300',
          //     'line-width': 4
          //   }
          // }
          // map.addLayer(template);
        })
        .catch(err => {
          console.log('error', err);
        });

      // this.$store.commit('rerender')
      this.$refs.address.clear();
    },
  }
}
</script>

<style lang="scss">

.input-route {
  height: 40px;
  line-height: 40px;
}
</style>