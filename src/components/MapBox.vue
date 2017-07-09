<template>
  <div id="mapbox-item"></div>  
</template>

<script>
import mapboxgl from 'mapbox-gl';
// import theme from './map';

export default {
  mounted() {
    const store = this.$store;

    let map = this.createMap();
    store.commit('loading', true)
    map.on('load', ()=> {
      store.commit('loading', false);
    });
  },
  methods: {
    createMap() {
      var el = document.getElementById('mapbox-item');
      
      const map = new mapboxgl.Map({
        container: 'mapbox-item',
        style: 'https://openmaptiles.github.io/klokantech-basic-gl-style/style-cdn.json',
        zoom: 10,
        center: [114.1794, 22.2888],
      });
      
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      return map;
    }
  }
}
</script>

<style lang="scss">

@import '../base-styles/vars';
@import 'mapstyles';
#mapbox-item {
  min-height: calc(100vh);
  // min-height: calc(100vh - #{$footer-height} );
  width: 100%;
}
</style>