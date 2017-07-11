<template>
  <section>
  <div v-if="message" class="message">
    <!-- error message -->
    <span v-if="message.errorMessage">
      {{ message.errorMessage }}
    </span>

    <!-- info message -->
    <span v-if="message.infoMessage">
      {{ message.infoMessage }}
    </span>

    <!-- success message -->
    <span v-if="message.successMessage">
      {{ message.successMessage }}
    </span>
    
  </div>
  <!--<div v-if="debug">
    <span>{{ message }}</span>
    <span>{{ route }} / {{ token }}</span>
  </div>-->
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
.message {
  background: white;
  width: 50%;
  margin: 0 auto;
  padding: 8px;
  margin-top: 16px;
}
</style>