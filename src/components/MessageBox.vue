<template>
  <section>
  <div v-if="message" class="message">
    <span>{{ message }}</span>
    <br>
    
    <!--<span v-if="message.error" 
          v-bind:class="{ error: message.error }">
          {{ message.error }}</span>
    
    <span v-if="!message.error && message.status != 'success'"
          v-bind:class="{ progress: message.status == 'in progress' }">
          {{ message.status }}</span>-->
    
  </div>
  <div v-if="debug">
    <span>{{ route }} / {{ token }}</span>
  </div>
  </section>
</template>

<script>
export default {
  props: ['message'],
  computed: {
    token() {
      return this.$store.getters.token;
    },
    route() {
      let truthy = this.$store.getters.route ? true : false;
      return truthy;
    },
    debug() {
      return this.$store.getters.debug;
    }
  }
}
</script>

<style lang="scss">

</style>