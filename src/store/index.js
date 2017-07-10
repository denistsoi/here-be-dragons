import Vue from 'vue';
import Vuex from 'vuex';

import navigation from './navigation';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    active: null,
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
    route: null,
    token: null
    // giphy: [],
    // loading: false,
    // online: false,
    // queries: [],
    // qs: '',
    // scope: 'trending',
    // selection: null,
    // fixed: false
  },
  getters: {
    active: state => { return state.active },
    language: state => { return state.language },
    loading: state => { return state.loading },
    location: state => { return state.location },
    map: state => { return state.map },
    message: state => { return state.message },
    navigation: state => { return state.navigation },
    route: state => { return state.route },
    token: state => { return state.token }
    // fixed: state => { return state.fixed },
    // scope: state => { return state.scope },
    // loading: state => { return state.loading },
    // query: state => { return state.qs; },
    // queries: state => { return state.queries; },
    // selection: state => { return state.selection }
  },
  mutations: {
    active (state, id) {
      return state.active = id;
    },
    loading (state, val) {
      return state.loading = val;
    },
    location (state, location) {
      let coord = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      };
      return state.location = coord;
    },
    message (state, message) {
      return state.message = message;
    },
    token (state, token) {
      return state.token = token;
    },
    saveRoute (state, route) {
      return state.route = route;
    }
    // fixed (state, val) { return state.fixed = val },
    // giphy (state, item) { return state.giphy.push(item) },
    // loading (state, value) { state.loading = value },
    // online (state) { state.online = true },
    // offline (state) { state.online = false },
    // qs (state, query) { return state.qs = query; },
    // query (state, query) { 
    //   let exists = state.queries.indexOf(query);
    //   if (exists < 0) {
    //     return state.queries.push(query) 
    //   }
    // },
    // selection (state, link) { state.selection = link; return link  },
    // updateTab(state, value) { state.scope = value }
  }
});