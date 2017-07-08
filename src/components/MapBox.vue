<template>
  <div id="mapbox-item">
  </div>  
</template>

<script>
import mapboxgl from 'mapbox-gl';
// import theme from './map';

export default {
  mounted() {
    const store = this.$store;
    if ('geolocation' in navigator) {
      let geo = navigator.geolocation.getCurrentPosition(location => {
        store.commit('location', location);
      });
    }
    console.log(this);
    this.createMap();
  },
  methods: {
    createMap() {
      var el = document.getElementById('mapbox-item');
      console.log('does this work?', el)
      
      // this also works
      // mapboxgl.accessToken =   'pk.eyJ1IjoiZGVuaXN0c29pIiwiYSI6ImNqMTVzZGVmcDAwMjUycXFtdGp4bWgzbWMifQ.V9rdzg6wOgkNQ_D1tygTEw'
      // var map = new mapboxgl.Map({
      //   container: 'mapbox-item',
      //   style: 'mapbox://styles/mapbox/dark-v9',
      //   zoom: 12,
      //   center: [114.1794, 22.2888]
      // });
      
      // this works
      var map = new mapboxgl.Map({
        container: 'mapbox-item',
        style: 'https://openmaptiles.github.io/dark-matter-gl-style/style-cdn.json',
        zoom: 12,
        center: [114.1794, 22.2888]
      });

      // const map = new mapboxgl.Map({
      //   container: 'mapbox-item',
      //   styles: {
      //   "version": 8,
      //   "name": "Bright",
      //   "sources": {
      //       "mapbox": {
      //           "url": "https://osm2vectortiles.tileserver.com/v2.json",
      //           "type": "vector"
      //       }
      //   },
      //   "glyphs": "https://fonts.openmaptiles.org/{fontstack}/{range}.pbf",
      //   },
      //   attributionControl: false,
      //   maxBounds: [[-180, -75], [180,75]] 
      // });
      
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');    
      console.log('does this work?')
    }
  }
}
</script>

<style lang="scss">

@import '../vars';
@import 'mapstyles';
#mapbox-item {
  min-height: calc(100vh - #{$footer-height} );
  width: 100%;
}
</style>