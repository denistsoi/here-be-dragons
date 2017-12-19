import mapboxgl from 'mapbox-gl';
import { generateMarker } from '../utils/';

// export actions
export default {
  saveWaypoint({ dispatch, commit, state }, waypoint) {
    commit('saveWaypoint', waypoint);
    
    let index = state.waypoints.length - 1;
    dispatch('generateMarker', { index, waypoint });
    dispatch('generateRoute')
  },
  generateMarker({ commit, state }, { index, waypoint }) {
    let marker = generateMarker(index, waypoint);
    commit('addMarker', marker);

    // append marker to map
    marker.addTo(state.map)
  },
  rerenderMarkers({ dispatch, commit, state }) {
    // removeAllMarkers
    state.markers.map(marker => marker.remove())
    state.markers = [];
    
    // reGenerateMarkers
    state.waypoints.forEach((waypoint, index) => {
      dispatch('generateMarker', { index, waypoint })
    });
  },
  loadMap({ commit }) {
    let bounds = [
      [113.23507613916462, 21.8603418729641],
      [115.05259007364214, 22.777303015462593]
    ];
    
    var map = new mapboxgl.Map({
      container: 'mapbox-item',
      style: 'https://openmaptiles.github.io/klokantech-basic-gl-style/style-cdn.json',
      zoom: 10,
      center: [114.1794, 22.2888],
      maxBounds: bounds,
    });

    // add map to store
    commit('addMap', map)
    
    // add mapbox navigation
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('load', ()=> {
     commit('loading', false);
    });
  },
  removeWaypoint({ dispatch, commit, state }, index) {
    commit('removeWaypoint', index);
    dispatch('rerenderMarkers');
    dispatch('generateRoute');
  },
  generateRoute({ commit, state }) {
    let waypoints = state.waypoints;
    
    let path = waypoints.map(waypoint => {
      let coord = [waypoint.longitude, waypoint.latitude].join(',');
      return coord;
    });
    
    // let url = "https://api.mapbox.com/directions/v5/mapbox/driving/";
    // let mapbox_url = `${url}${path.join(';')}?steps=true&alternatives=true&geometries=geojson&access_token=pk.eyJ1IjoiZGVuaXN0c29pIiwiYSI6ImNqNWRhNnozZzBoNGQzMm9oZ2sycG5xdmEifQ.rpJNzetOlSaCMaTPIHKXEA`;

    let url = "http://router.project-osrm.org/route/v1/driving/";
    let endpoint_url = `${url}${path.join(';')}?steps=true&alternatives=true&geometries=geojson&overview=full`

    // console.log(endpoint_url);

    if (waypoints.length >= 2) {
      // mapbox
      fetch(endpoint_url)
        .then(response => response.json())
        .then(data => {
          commit('saveRoute', data.routes[0].geometry);
          commit('saveRouteDetails', {
            distance: data.routes[0].distance, 
            duration: data.routes[0].duration
          })
        })
        .catch(err => {
          console.log('error', err);
        });
    } else {
      commit('saveRoute', null)
      commit('saveRouteDetails', null)
    }
  }
}