<template>
  <div id="content">
    <ui-loader v-if="loading"></ui-loader>
    <map-box></map-box>
    <!--<acknowledgements></acknowledgements>-->
  </div>  
</template>

<script>
import Acknowledgements from '../components/Acknowledgements';
import MapBox from '../components/MapBox';
import UiLoader from '../components/Loader';

export default {
  components: {
    Acknowledgements,
    MapBox,
    UiLoader
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
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
    position: relative;
    display: flex;
    width: 100%;
    // background: #efefef;
    flex-direction: column;
  }
</style>
