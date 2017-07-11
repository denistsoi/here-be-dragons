<template>
  <div id="app">
    <sidebar></sidebar>
    <content-container></content-container>
  </div>
</template>

<script>
  import ContentContainer from './container/ContentContainer';
  // const Sidebar = () => import('./components/Sidebar');
  import Sidebar from './components/Sidebar';
  export default {
    components: {
      ContentContainer,
      Sidebar,
    },
  }
</script>

<style lang="scss">
  @import './common-styles/vars';
  
  body {
    margin: 0;
    background-image: linear-gradient(#eee 1px, transparent 1px);
    background-size: 100% $base-height; 
    background-color: $default-background-color;
    color: $base-font-color;
    min-width: 470px;
  }

  #app {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6, p, span, a {
    margin: 0;
  }
  
  @import './common-styles/font';

</style>