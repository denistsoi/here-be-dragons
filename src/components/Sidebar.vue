<template>
  <div id="sidebar">
    <ul>  
      <li v-for="nav in navigation">
        <div>
           <!-- <span>{{ nav.label }}</span> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigation: [
        {
          id: 'order',
          label: 'place order'
        },
        {
          id: 'records',
          label: 'records'
        },
        {
          id: 'driver',
          label: 'manage drivers'
        },
        {
          id: 'wallet',
          label: 'wallet'
        },                        
      ]
    }
  }
}
</script>

<style lang="scss">
:root {
  ul {
    padding: 0;
    list-style-type: none;
    display: block;
    margin: 0;
  }
  li {
    display: block;
    padding: 0;
  }
}
#sidebar {
  width: 20%;
  background: lightblue;
  display: flex;
  max-width: 280px;
}

</style>