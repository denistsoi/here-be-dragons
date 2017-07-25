<template>
  <div class="input-route">
        <vue-google-autocomplete
            ref="address"
            id="map"
            types="geocode"
            classname="form-control"
            placeholder="Please type your address"
            v-on:placechanged="getAddressData"
            country="hk">
        </vue-google-autocomplete>
  </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'

export default {
  components: { VueGoogleAutocomplete },
  data() {
    return {
      address: ''
    }
  },
  mounted() {
    // set focus to next inserted if adding waypoint 
    this.$refs.address.focus();
  },
  methods: {
    getAddressData (addressData, placeResultData) {
      // console.log(addressData, placeResultData);
      this.address = addressData; 
      this.address.name = placeResultData.formatted_address;
      this.$store.commit('saveWaypoint', this.address);
      this.$refs.address.clear();
    },
  }
}
</script>

<style lang="scss">

.input-route {
  height: 40px;
  line-height: 40px;
}
</style>