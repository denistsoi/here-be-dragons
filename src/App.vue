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
  body {
    margin: 0;
    background-image: linear-gradient(#eee 1px, transparent 1px);
    background-size: 100% 8px; 
  }
  #app {
    display: flex;
    padding: 8px;
    flex-direction: row;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6, p, span, a {
    margin: 0;
  }

  $base-height: 8px;

  @mixin site-header() {
    font-size: $base-height * 8;
    line-height: $base-height * 8;
    padding-top: 5px;
    padding-bottom: 3px;
  }
  @mixin section-header() {
    font-size: $base-height * 4;
    line-height: $base-height * 6;
    font-style: italic;
    font-weight: 300;
    padding-top: 5px;
    padding-bottom: 3px;

  }
  @mixin list-header() {
    font-size: $base-height * 3;
    line-height: $base-height * 3;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  @mixin list-item() {
    font-size: $base-height * 3;
    line-height: $base-height * 3;
    font-weight: 300;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  @mixin base-font() {
    font-size: $base-height * 2;
    line-height: $base-height * 3;
  }
  @mixin detail() {
    font-size: $base-height * 1.5;
    line-height: $base-height * 1.5;
    font-style: italic;
  }

  h1, .site-header {
    @include site-header();
    font-family: 'Playfair Display', serif;
  }
  h2, .section-header {
    @include section-header();
    font-family: 'Libre Franklin', sans-serif;
  }
  h3, .list-header, {
    @include list-header();
    font-family: 'Libre Franklin', sans-serif;
  }
  h4, .list-item-title {
    @include list-item();
    font-family: 'Libre Franklin', sans-serif;
  }
  p, span {
    @include base-font();
    font-family: 'Libre Franklin', sans-serif;
  }
  .detail {
    @include detail();
    font-family: 'Libre Franklin', sans-serif;
  }
  // grid
  .col {
    max-width: 550px;
  }

</style>