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
    this.$refs.address.focus();
  },
  methods: {
    getAddressData (addressData, placeResultData) {
      this.address = addressData; 
      this.address.name = placeResultData.formatted_address;
      this.$store.dispatch('saveWaypoint', this.address)
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