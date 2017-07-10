<template>
  <div id="mapbox-item">
    <div class="create-route">
      <button @click="getToken()"><span>{{ route ? 'Plot' : 'Create' }}</span></button>
      <MessageBox :message="message"></MessageBox>
    </div>
  </div>  
</template>

<script>
import mapboxgl from 'mapbox-gl';
import { 
  generatePath,
  handleResponse, 
  handleRouteRequest,
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
    }
  },
  computed: {
    route() {
      return this.$store.getters.route;
    },
    message() {
      return this.$store.getters.message;
    }
  },
  mounted() {
    const store = this.$store;

    const map = new mapboxgl.Map({
      container: 'mapbox-item',
      style: 'https://openmaptiles.github.io/klokantech-basic-gl-style/style-cdn.json',
      zoom: 10,
      center: [114.1794, 22.2888],
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // we want to reference this later
    this.$set(this, 'map', map);

    // store.commit('loading', true);

    // map.on('load', ()=> {
    //   store.commit('loading', false);
    // });
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

      for (var i = 0; i < path.length -1; i++) {
        generatePath(i, vm.map, path);
      }
    },
    getRoute(token, attempts) {
      let vm = this;
      let store = this.$store;
      
      if (!attempts) {
        attempts = 1;
      }

      if (!store.getters.route) {
        fetch(`http://localhost:3001/route/${token}`)
          .then(response => handleRouteRequest(response))
          .then(data => {
            console.log(data);
            if (data.status == StatusCodes.failure) {
              // throw failure
              store.commit('message', data);

            } else if (data.status == StatusCodes.progress) {
              // show in progress (try again)
              store.commit('message',  { 
                status: 'progress', 
                infoMessage: `attempt #${attempts}: server in progress, retrying request...`
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
              errorMessage: `fetch failed... retrying ${attempts}`
            })
            
            if (attempts < 5) {
              attempts++;
              setTimeout(() => {
                vm.getToken(attempts) 
              }, 2000);
            } else {
              // show error after all failed retries
              store.commit('message', { 
                error: true, 
                errorMessage: 'Server has an error, please contact help@lalamove.com' 
              });
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
            errorMessage: `attempt: ${attempts}. Request at access token failed. retrying... `
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
          }
        });
    }
  }
}
</script>

<style lang="scss">

@import '../base-styles/vars';
@import '../base-styles/mixins';
@import 'mapstyles';
#mapbox-item {
  min-height: calc(100vh);
  width: 100%;
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
  }
}
</style>