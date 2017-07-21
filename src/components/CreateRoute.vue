<template>
  <div class="create-route-container">
    <div class="create-route">
      <div v-for="(waypoint, index) in waypoints">
        <input-route :waypoint="waypoint" :index="index"></input-route> 
      </div>

      <!-- <input-route type="start"></input-route>
      <input-route type="finish"></input-route>
      <span @click="addWayPoint">+</span> -->
    </div>

    <div class="auto-complete">
      <!-- <pre><code>{{ suggestions | json}}</code></pre> -->
      <!-- <suggestions ></suggestions-list>  -->
        <!-- <div class="suggestion" v-for="suggestion in suggestions"> 
          <span>{{ suggestion.matching_place_name ? suggestion.matching_place_name : suggestion.text }}</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import InputRoute from "./InputRoute";

export default {
  components: {
    InputRoute
  },
  computed: {
    waypoints() {
      return this.$store.getters.waypoints;
    },
    suggestions() {
      return this.$store.getters.suggestions;
    }
  },
  mounted() {
  },
  methods: {
    addWayPoint() {

    }
  }
}
</script>

<style lang="scss">
@import '../common-styles/vars';
@import '../common-styles/mixins';

.create-route-container {
  text-align: center;
  background: transparent;
  position: relative;
  width: 20%;
  min-width: 250px;
  height: 100%;
  padding-top: $header-height; 

  .create-route {
    padding: 0 8px;
    text-align: left;

    @include placeholder(#444);
    input {
      border: 0;
      padding: 0;
      outline: 0;
      padding: 0 2px;
      height: 32px;
      line-height: 32px;
      font-size: initial;
      background-color: initial;
      text-transform: capitalize;
      max-width: 200px;
      width: 100%;
    }
    border-bottom: $dashed-border-style;
  }
  

  button {
    @include createButton();
    &.disabled,
    &.disabled:hover,
    &.requesting,
    &.requesting:hover {
      background-color: $button-color;
      transition: all .3s ease;
      color: $button-text-color;
    }
  }
}

.suggestion {
  text-align: left;
  span {
    font-size: 12px;
  }
}
</style>