import Vue from 'vue'
import Vuex from 'vuex'

import navigation from './navigation'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    active: null,
    debug: process.env.DEBUG,
    language: 'english',
    loading: false,
    location: {},
    locations: {
      'hong-kong': {
        center: {
          lng: 114.21512528562675,
          lat: 22.33767556806147
        },
        zoom: 9.5
      },
      'taipei': {
        // 25.0330° N, 121.5654° E
        center: {
          lng: 121.5654,
          lat: 25.0330
        },
        zoom: 9
      },
      'manila': {
        // 14.5995° N, 120.9842° E
        center: {
          lng: 120.9842,
          lat: 14.5995
        },
        zoom: 9
      },
      'bangkok': {
        // 13.7563° N, 100.5018° E
        center: {
          lng: 100.5018,
          lat: 13.7563
        },
        zoom: 9
      },
      'singapore': {
        // 1.3521° N, 103.8198° E
        center: {
          lng: 103.8198,
          lat: 1.3521
        },
        zoom: 9
      }
    },
    map: null,
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
    map: state => { return state.map },
    message: state => { return state.message },
    navigation: state => { return state.navigation },
    path: state => { return state.path },
    route: state => { return state.route },
    suggestions: state => { return state.suggestions },
    token: state => { return state.token },
    waypoints: state => { return state.waypoints }
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
    // path (state, route) {
    //   let path = route.path.map(step => {
    //     return [step[1], step[0]]
    //   })
    //   state.path = path
    //   return state.path
    // },
    saveRoute (state, route) {
      state.route = route
      return state.route
    },
    // saveSuggestions (state, suggestions) {
    //   state.suggestions = suggestions
    //   return state.suggestions
    // },
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
    updateList (state, value) {
      return state.waypoints = value;
    }
  }
})
