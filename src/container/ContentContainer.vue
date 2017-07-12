<template>
  <div id="content">
    <ui-loader v-if="loading"></ui-loader>
    <map-box v-show="!loading"></map-box>
  </div>  
</template>

<script>
import MapBox from '../components/MapBox';
import UiLoader from '../components/Loader';

export default {
  components: {
    MapBox,
    UiLoader
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
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
