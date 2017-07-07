<template>
  <div id="content">
    <map-box></map-box>
    <acknowledgements></acknowledgements>
  </div>  
</template>

<script>
import Acknowledgements from '../components/Acknowledgements';
import MapBox from '../components/MapBox';

export default {
  components: {
    Acknowledgements,
    MapBox
  },
  computed: {
    // location() {
    //   return this.$store.getters.location;
    // }
  },
  created() {

  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  #content {
    display: flex;
    width: 100%;
    // background: #efefef;
    flex-direction: column;
  }
</style>
