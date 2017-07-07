<template>
  <div id="mapbox">
  </div>  
</template>

<script>
import mapboxgl from 'mapbox-gl';
import theme from './map.json';

export default {
  mounted() {
    const store = this.$store;
    if ('geolocation' in navigator) {
      let geo = navigator.geolocation.getCurrentPosition(location => {
        store.commit('location', location);
      });
    }
    this.createMap();
  },
  created() {
    // this.createMap();
  },
  methods: {
    createMap() {
      mapboxgl.accessToken = ''
      const map = new mapboxgl.Map({
        container: 'mapbox',
        styles: theme,
        attributionControl: false,
        maxBounds: [[-180, -75], [180,75]] 
      });
      console.log(map)
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');    
    }
  }
}
</script>

<style lang="scss">

@import '../vars';
@import 'mapstyles';
#mapbox {
  min-height: calc(100vh - #{$footer-height} );
  width: 100%;
}
</style>