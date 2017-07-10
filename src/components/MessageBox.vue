<template>
  <div v-if="message" class="message">
    <span>{{ message }}</span>
    <!--<span v-if="message.error" 
          v-bind:class="{ error: message.error }">
          {{ message.error }}</span>
    
    <span v-if="!message.error && message.status != 'success'"
          v-bind:class="{ progress: message.status == 'in progress' }">
          {{ message.status }}</span>-->
    
  </div>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style lang="scss">

</style>