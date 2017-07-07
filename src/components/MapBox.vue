<template>
  <div id="map">
  </div>  
</template>

<script>
export default {
  mounted() {
    const store = this.$store;
    if ('geolocation' in navigator) {
      let geo = navigator.geolocation.getCurrentPosition(location => {
        store.commit('location', location);
      });
    }
  }
}
</script>

<style lang="scss">
#map {
  min-height: 200px;
  width: 100%;
}
</style>