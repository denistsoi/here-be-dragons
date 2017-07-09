<template>
  <div id="mapbox-item">
    <div class="create-route">
      <button @click="getToken()"><span>Create Route</span></button>
    </div>
  </div>  
</template>

<script>
import mapboxgl from 'mapbox-gl';
import { 
  handleResponse, 
  handleRouteRequest,
  handleError } from '../utils';



export default {
  mounted() {
    const store = this.$store;

    const map = new mapboxgl.Map({
      container: 'mapbox-item',
      style: 'https://openmaptiles.github.io/klokantech-basic-gl-style/style-cdn.json',
      zoom: 10,
      center: [114.1794, 22.2888],
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    store.commit('loading', true);

    map.on('load', ()=> {
      store.commit('loading', false);
    });
  },
  methods: {
    getRoute(token) {
      
      fetch(`http://localhost:8080/route/${token}`)
        .then(response => handleRouteRequest(response))
        .then(data => {
          console.log('route', data);
        })
        .catch(error => handleError(error));
    },
    getToken() {
      let store = this.$store;

      // push to array to handle multple routes
      fetch('http://localhost:8080/route', {
        method: 'post'
      })
        .then(response => handleResponse(response))
        .then(data => {
          let token = store.getters.token;
          if (!token) {
            store.commit('token', data.token);
          };
          this.getRoute(data.token);
        })
        .catch(error => handleError(error));
    }
  }
}
</script>

<style lang="scss">

@import '../base-styles/vars';
@import '../base-styles/mixins';
@import 'mapstyles';
#mapbox-item {
  min-height: calc(100vh);
  width: 100%;
}

.create-route {
  text-align: center;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding-top: $header-height; 
  // padding: 8px 0;
  button {
    @include createButton();
  }
}
</style>