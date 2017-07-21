<template>
  <div class="input-route">
     <!-- <input :placeholder="type"
            v-model="location"
            @keyup.enter="findLocation"><span class="dismiss" v-if="location" @click="clearInput">X</span>   -->
        <vue-google-autocomplete
            ref="address"
            id="map"
            classname="form-control"
            placeholder="Please type your address"
            v-on:placechanged="getAddressData"
            country="hk"
        >
        </vue-google-autocomplete>
        <span class="dismiss" v-if="address" @click="clearInput">X</span>
  </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'

export default {
  components: { VueGoogleAutocomplete },
  props: ['waypoint', 'index'],
  data() {
    return {
      location: '',
      address: ''
    }
  },
  mounted() {
    // set focus to next inserted if adding waypoint 
    this.$el.firstChild.focus();
  },
  computed: {
    type() {
      let index = this.index;

      if (index === 0) {
        return 'Start'
      } else if (index === this.$parent.waypoints.length -1) {
        return 'End'
      }
    }
  },
  methods: {
    getAddressData (addressData, placeResultData) {
        this.address = addressData;
    },
    findLocation(ev) {
      let text = ev.target.value;
      if (!text.trim().length) {
        return;
      }
      let store = this.$store;
      let newId = store.getters.waypoints.length;
      
      let index = this.index;

      if (index == 0 && this.$parent.waypoints.length > 2) {
        // go to last input-route
        return;
      }
      // console.log(text);
      // move proximity to store (for multi-location)
      // client.geocodeForward(text, {
      //   proximity: { latitude: 22.2888, longitude: 114.1794 },
      //   country: 'hk'
      // }, (err, res) => {
      //   if (err) {
      //     // log error
      //   }
      //   // output response array (res.features)
      //   console.log(res)
      //   store.commit('saveSuggestions', res.features);
      // })


      googleMapsClient.geocode({
        address: text 
      }, (err, res) => {
        if (err) {
          // log error
        }
        // output response array (res.features)
        console.log(res)
      });

    },
    clearInput() {
      this.$data.location = '';
      let store = this.$store;
      let waypoint = this.waypoint;

      // store.commit('removeWaypoint', waypoint.id);
      // console.log(store, waypoint);
    }
  }
}
</script>

<style lang="scss">
.dismiss:hover {
  cursor: pointer;
}

.input-route {
  height: 40px;
  line-height: 40px;
}
</style>