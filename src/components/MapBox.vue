<template>
  <div id="mapbox-item">
    <div class="create-route">
      <button 
              v-bind:class="{ requesting: requesting, disabled: route }"
              v-bind:disabled="requesting || route"
              @click="getToken()">
        <span v-if="!route">{{ !requesting ? 'Request Route' : 'Requesting...' }}</span>
        <span v-if="route">{{ 'Route Generated' }}</span>
      </button>
      <MessageBox :message="message"></MessageBox>
    </div>
  </div>  
</template>

<script>
import mapboxgl from 'mapbox-gl';
import { 
  generateMarkers,
  generatePath,
  handleResponse, 
  handleError,
  StatusCodes 
} from '../utils';

import MessageBox from './MessageBox';

export default {
  components: {
    MessageBox
  },
  data() {
    return {
      map: null,
      requesting: false
    }
  },
  computed: {
    route() {
      return this.$store.getters.route;
    },
    message() {
      return this.$store.getters.message;
    },

  },
  mounted() {
    const store = this.$store;

    let bounds = [
      [113.23507613916462, 21.8603418729641],
      [115.05259007364214, 22.777303015462593]
    ];
    
    const map = new mapboxgl.Map({
      container: 'mapbox-item',
      style: 'https://openmaptiles.github.io/klokantech-basic-gl-style/style-cdn.json',
      zoom: 10,
      center: [114.1794, 22.2888],
      maxBounds: bounds
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // we want to reference this later
    this.$set(this, 'map', map);

    store.commit('loading', true);

    map.on('load', ()=> {
      store.commit('loading', false);
    });
  },
  methods: {
    generateRoute(route) {
      let vm = this;
      let store = this.$store;
      store.commit('saveRoute', route);
      store.commit('path', route);

      window.map = vm.map;
      window.store = store;
      
      let path = store.getters.path;

      for (var i = 0; i < path.length; i++) {
        generatePath(i, vm.map, path);
        generateMarkers(vm.map, path[i]);
      }
      vm.$set(this, 'requesting', false);
    },
    getRoute(token, attempts) {
      let vm = this;
      let store = this.$store;
      
      if (!attempts) {
        attempts = 1;
      }

      if (!store.getters.route) {
        vm.$set(this, 'requesting', true);
        
        fetch(`http://localhost:3001/route/${token}`)
          .then(response => handleResponse(response))
          .then(data => {
            if (data.status == StatusCodes.failure) {
              // show failure
              store.commit('message', {
                error: true,
                status: data.status,
                errorMessage: data.error + '... Try again'
              });
              vm.$set(this, 'requesting', false);
            } else if (data.status == StatusCodes.progress) {
              // show in progress (try again)
              store.commit('message',  { 
                status: 'progress', 
                infoMessage: `Attempt #${attempts}: Server in progress... Retrying... `
              });
              
              setTimeout(()=>{
                attempts++;
                vm.getRoute(token, attempts);
              }, 2000);
            } else if (data.status == StatusCodes.success) {
              // show route
              store.commit('message', { 
                status: data.status, 
                successMessage: 'successfully retrieved route' 
              });
              vm.generateRoute(data);
            }
          })
          .catch(error => {
            store.commit('message', { 
              error: true,
              errorMessage: `Attempt #${attempts}: Request at generating route failed. Retrying... `
            })
            
            if (attempts < 5) {
              attempts++;
              setTimeout(() => {
                vm.getRoute(token, attempts) 
              }, 2000);
            } else {
              // show error after all failed retries
              store.commit('message', { 
                error: true, 
                errorMessage: 'Server has an error, please contact help@lalamove.com' 
              });
              vm.$set(this, 'requesting', false);
            }
            handleError(error)
          });
      }
      
    },
    getToken(attempts) {
      let vm = this;
      let store = this.$store;

      if (!attempts) {
        attempts = 1;
      } 
      
      let token = store.getters.token;
      if (token) {
        return vm.getRoute(token);
      }
      
      vm.$set(this, 'requesting', true);

      // TODO: suggestion
      // push to array to handle multiple routes
      fetch('http://localhost:3001/route', {
        method: 'post'
      })
        .then(response => handleResponse(response))
        .then(data => {          
          store.commit('token', data.token);
          
          store.commit('message', { 
            success: 'token', 
            successMessage: 'Successfully retrieved token, requesting route...'
          })
          
          setTimeout(() => {
            vm.getRoute(data.token) 
          }, 2000);
        })
        .catch(error => {

          store.commit('message', { 
            error: true,
            errorMessage: `Attempt #${attempts}: Request at access token failed. Retrying... `
          })
          handleError(error);
          
          if (attempts < 5) {
            setTimeout(() => {
              attempts++;
              vm.getToken(attempts) 
            }, 2000);
          } else {
            // show error after all failed retries
            store.commit('message', {
              error: true,
              errorMessage: 'Server has an error, please contact help@lalamove.com'
            });
            vm.$set(this, 'requesting', false);
          }
        });
    }
  }
}
</script>

<style lang="scss">

@import '../common-styles/vars';
@import '../common-styles/mixins';
@import '../common-styles/mapstyles';

#mapbox-item {
  min-height: calc(100vh);
  width: 100%;
}

.marker {
  background: black;
}
.create-route {
  text-align: center;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding-top: $header-height; 
  // padding: 8px 0;
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
</style>