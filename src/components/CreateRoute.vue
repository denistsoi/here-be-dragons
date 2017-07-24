<template>
  <div class="create-route-container">
    <div class="create-route">
      <input-route></input-route>
    </div>

    <draggable v-model="waypoints" class="waypoints">
      <div v-for="waypoint in waypoints" class="waypoint">
        <span class="address">{{ waypoint.route }}</span><span class="dismiss" v-if="waypoint" @click="clearInput">X</span>
      </div>
    </draggable>
    
  </div>
</template>

<script>
import InputRoute from "./InputRoute";
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
    InputRoute
  },
  computed: {
    waypoints: {
      get() {
        return this.$store.getters.waypoints;
      },
      set(value) {
        this.$store.commit('updateList', value)
        // this.$store.commit('rerenderMap', true)
      }
    }
  },
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

.dismiss:hover {
  cursor: pointer;
}
.waypoints {
  padding: 2*$base-height $base-height 0;
  text-align: left;
}
.waypoint {
  display: flex;
}
.address {
  width: 90%;
  display: block;
  @include ellipsis();
}

.dismiss {
  font-size: 12px;
  border-radius: 50%;
  width: 20px;
  height: 24px;
  display: inline-block;
  text-align: center;
  line-height: 24px;  
}
</style>