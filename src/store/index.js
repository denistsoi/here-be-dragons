import Vue from 'vue'
import Vuex from 'vuex'

import navigation from './navigation'
import mapboxgl from 'mapbox-gl';

import { generateMarker } from '../utils/';
import locations from './locations';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active: null,
    debug: process.env.DEBUG,
    language: 'english',
    loading: false,
    location: {},
    locations: locations,
    map: {},
    markers: [],
    message: null,
    navigation: navigation,
    path: null,
    route: null,
    suggestions: null,
    token: null,
    waypoints: []
  },
  getters: {
    active: state => { return state.active },
    language: state => { return state.language },
    loading: state => { return state.loading },
    location: state => { return state.location },
    markers: state => () => { return state.markers },
    message: state => { return state.message },
    navigation: state => { return state.navigation },
    path: state => { return state.path },
    route: state => () => { return state.route },
    suggestions: state => { return state.suggestions },
    token: state => { return state.token },
    waypoints: state => { return state.waypoints }
  },
  actions: {
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
      
      // rerenderMarkers
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
    generateRoute({ commit, state }) {
      let waypoints = state.waypoints;
      
      let path = waypoints.map(waypoint => {
        let coord = [waypoint.longitude, waypoint.latitude].join(',');
        return coord;
      });
      
      let url = "https://api.mapbox.com/directions/v5/mapbox/driving/";
      
      let mapbox_url = `${url}${path.join(';')}?steps=true&alternatives=true&geometries=geojson&access_token=pk.eyJ1IjoiZGVuaXN0c29pIiwiYSI6ImNqNWRhNnozZzBoNGQzMm9oZ2sycG5xdmEifQ.rpJNzetOlSaCMaTPIHKXEA`;

      if (waypoints.length >= 2) {
        // mapbox
        fetch(mapbox_url)
          .then(response => response.json())
          .then(data => {
            commit('saveRoute', data.routes[0].geometry);
          })
          .catch(err => {
            console.log('error', err);
          });
      }
    }
  },
  mutations: { 
    active (state, id) {
      state.active = id
      return state.active
    },
    loading (state, val) {
      state.loading = val
      return state.loading
    },
    location (state, location) {
      let coord = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
      state.location = coord
      return state.location
    },
    message (state, message) {
      state.message = message
      return state.message
    },
    saveRoute (state, route) {
      state.route = route
      return state.route
    },
    addMap (state, map) {
      state.map = map;
      return;
    },
    addMarker (state, marker) {
      state.markers.push(marker);
    },
    removeWaypoint (state, index) {
      console.log('before', state.waypoints)
      state.waypoints.splice(index, 1)
      console.log('after', state.waypoints)
      return state.waypoints
    },
    saveWaypoint (state, waypoint) {
      state.waypoints.push(waypoint)
    },
    token (state, token) {
      state.token = token
      return state.token
    },
    updateWaypoints (state, value) {
      return state.waypoints = value;
    }
  },  
})
