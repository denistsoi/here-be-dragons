<template>
  <div class="create-route-container" v-show="!loading">
    <div class="create-route">
      <input-route></input-route>
    </div>

    <draggable v-model="waypoints" class="waypoints" v-if="waypoints">
      <transition-group name="waypoint">
        <div v-for="(waypoint, index) in waypoints" class="waypoint-item" v-bind:key="waypoint">
          <span class="index">{{ index + 1 }}</span>
          <span class="address">{{ waypoint.name }}</span>
          <span class="dismiss" v-if="waypoint" @click="removeWaypoint(index)">X</span>
        </div>
      </transition-group>
    </draggable>
    
    <div class="route-details" v-if="details">
      <p>Route Details</p>
      <p>Distance {{ distance | toKM }}</p> 
      <p>Approx. {{ duration | toHumanTime }}</p>
    </div>
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
  filters: {
    toHumanTime: function(val) {
      if (val) {
        return `${Math.floor(val/60)} mins`;
      }
    },
    toKM: function(val) {
      if (val) {
        return Math.ceil(parseInt(val/1000)).toString() + "KM";
      }
    }
  },  
  computed: {
    waypoints: {
      get() {
        return this.$store.getters.waypoints;
      },
      set(value) {
        this.$store.commit('updateWaypoints', value) // update waypoints
        this.$store.dispatch('rerenderMarkers')
        this.$store.dispatch('generateRoute') // dispatch rerender of route
      }
    },
    details: {
      get: function() {
        return this.$store.state.routeDetails;
      }
    },
    distance: {
      get: function() {
        let details = this.$store.state.routeDetails;
        if (details) {
          return details.distance;
        }
      }
    },
    duration: {
      get: function() {
        let details = this.$store.state.routeDetails;
        if (details) {
          return details.duration;
        }
      }
    },    
    loading: {
      get() {
        return this.$store.getters.loading;
      }
    }
  },
  methods: {
    removeWaypoint(index) {
      this.$store.dispatch('removeWaypoint', index)
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

  display: grid;
  grid-template-rows: 80px 240px;
  grid-template-columns: 250px;

  & > div {
    padding-top: 16px;
  }

  .create-route {
    padding: 32px 8px 0;
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

.dismiss {
  // display: none;
  opacity: 0;
  &:hover {
    @include pointer();
  }
}
.waypoints {
  padding: 2*$base-height 0;
  text-align: left;
}


.waypoint-item {
  // declare waypoint vars
  $waypoint-height: 5*$base-height;
  display: flex;
  
  height: $waypoint-height;
  padding: 0 $base-height;

  cursor: grabbing;
  cursor: -webkit-grabbing;

  transition: all .3s ease-in;

  &:hover {
    @include pointer(); 
    .dismiss {
      opacity: 1;
    }
  }

  &.sortable-chosen, &.sortable-ghost,
  &.sortable-chosen.sortable-ghost {
    background: $highlight-color;
    transition: all .3s ease-in;
    cursor: grabbing;
    cursor: -webkit-grabbing;

    span {
      display: block;
      color: $light-font-color;
    }
  }

  // default span settings
  span {
    line-height: $waypoint-height;
  }
  
  .index {
    width: 20px;
  }
  
  .address {
    width: 90%;
    display: block;
    @include ellipsis();
    line-height: $waypoint-height;
  }

  .dismiss {
    font-size: 12px;
    border-radius: 50%;
    width: 20px;
    height: 24px;
    text-align: center;
    line-height: $waypoint-height;  
  }
}

.waypoint-enter-active, .waypoint-leave-active {
  transition: opacity .5s
}
.waypoint-enter, .waypoint-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

</style>