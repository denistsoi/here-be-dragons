export default { 
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
  saveRouteDetails (state, details) {
    state.routeDetails = details;
    return state.routeDetails;
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
    state.waypoints.splice(index, 1)
    return state.waypoints
  },
  saveWaypoint (state, waypoint) {
    state.waypoints.push(waypoint)
  },
  updateWaypoints (state, value) {
    return state.waypoints = value;
  },
  token (state, token) {
    state.token = token
    return state.token
  },
}