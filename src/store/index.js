import Vue from 'vue';
import Vuex from 'vuex';

// import helpers
import actions from './actions';
import getters from './getters';
import locations from './locations';
import navigation from './navigation';
import mutations from './mutations';

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
    routeDetails: null,
    routes: [],
    suggestions: null,
    token: null,
    waypoints: []
  },
  getters: getters,
  actions: actions,
  mutations: mutations,  
})
