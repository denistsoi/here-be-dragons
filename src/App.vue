<template>
  <div id="app">
    <sidebar></sidebar>
    <content-container></content-container>
  </div>
</template>

<script>
  import ContentContainer from './container/ContentContainer';
  import Sidebar from './components/Sidebar';
  export default {
    components: {
      ContentContainer,
      Sidebar,
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
  @import './base-styles/vars';
  
  body {
    margin: 0;
    background-image: linear-gradient(#eee 1px, transparent 1px);
    background-size: 100% 8px; 
    background-color: rgba(238, 239, 238, .7);
    color: $base-font-color;
  }
  #app {
    display: flex;
    // padding: 8px;
    flex-direction: row;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6, p, span, a {
    margin: 0;
  }
  
  @import './base-styles/font';

</style>