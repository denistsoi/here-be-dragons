// export getters
export default {
  active: state => { return state.active },
  language: state => { return state.language },
  loading: state => { return state.loading },
  location: state => { return state.location },
  markers: state => () => { return state.markers },
  message: state => { return state.message },
  navigation: state => { return state.navigation },
  path: state => { return state.path },
  route: state => () => { return state.route },
  routeDetails: state => () => { return state.routeDetails },
  routes: state => () => { return state.routes },
  suggestions: state => { return state.suggestions },
  token: state => { return state.token },
  waypoints: state => { return state.waypoints }
}