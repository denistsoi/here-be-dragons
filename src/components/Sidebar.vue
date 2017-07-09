<template>
  <div id="sidebar">
    
    <header>
      <h3>Home</h3>
    </header>

    <ul>  
      <li v-for="nav in navigation" v-bind:class="{ active: nav.id == active }" @click="changeActive(nav.id)">
        <div>
            <h4>{{ nav.label }}</h4> 
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    navigation() {
      let store = this.$store;
      let navigation = store.getters.navigation[store.getters.language].navigation;
      return navigation;
    },
    active() {
      let store = this.$store;
      return store.getters.active;
    }
  },
  created() {
    let store = this.$store;
    store.commit('active', 'order');
  },
  methods: {
    changeActive(id) {
      let active = this.$store.getters.active;

      if (active != id) {
        this.$store.commit('active', id);
      }
    }
  }
}
</script>

<style lang="scss">
@import '../base-styles/vars';
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
    &.active {
      border-left: 4px solid $highlight-color;
      padding-left: 12px;
    }
    text-transform: capitalize;
  }
}
#sidebar {
  width: 10%;
  border-right: 1px dashed #cf653e;
  display: flex;
  max-width: 280px;
  flex-direction: column;
  // padding-left: 16px;
  min-width: 160px
}

header {
  padding-top: $header-height;
  padding-left: 16px;
  color: $header-color;
  user-select: none;
  margin-bottom: $base-height;
}

</style>