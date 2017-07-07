<template>
  <div id="sidebar">
    
    <header>
      <h3>Home</h3>
    </header>

    <ul>  
      <li v-for="nav in navigation">
        <div>
           <!-- <h4>{{ nav.label }}</h4> -->
           <h4>{{ nav.mock }}</h4>
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
          label: 'order',
          mock: 'label1'
        },
        {
          id: 'records',
          label: 'records',
          mock: 'label2'
        },
        {
          id: 'driver',
          label: 'drivers',
          mock: 'label3'
        },
        {
          id: 'wallet',
          label: 'wallet',
          mock: 'label4'
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
    padding-left: 16px;
    &:hover {
      cursor: pointer;
    }
  }
}
#sidebar {
  width: 10%;

  border-right: 1px dashed rgba(207, 101, 62, .7);
  display: flex;
  max-width: 280px;
  flex-direction: column;
  padding-left: 16px;
  min-width: 160px
}

@import '../vars';
header {
  padding-top: $base-height * 4;
}

</style>