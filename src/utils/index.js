import { Marker } from 'mapbox-gl';

/**
 * status codes for verifying with api
 */
export const StatusCodes = {
  failure : 'failure',
  progress: 'in progress',
  success : 'success'
}

/**
 * generateMarkers 
 * @description helper function to generate mapbox markers
 * @param {*} map 
 * @param {lat/lng} location 
 */
export const generateMarkers = (map, location) => {
  let el = document.createElement('div');
  let height = 20, width = 10;

  el.className = 'marker';
  
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  
  new Marker(el,  {offset: 
    [-width / 2, -height / 2] 
  })
    .setLngLat(location)
    .addTo(map);
}

/**
 * generatePath
 * @param {number} i // index of path
 * @param {Mapbox Object} map 
 * @param {lat/lng} path 
 */
export const generatePath = (i, map, path) => {
  // need to create this as a lib [find lib to generate random gradient from hex]
  let baseColors = ["#CF653E", "#D47F60", "#DA9A83", "#E0B5A6"];

  map.addLayer({
    id: "route-" + i,
    type: "line",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [
            path[i],
            path[i+1]
          ]
        }
      }
    },
    layout: {
      "line-join": "round",
      "line-cap": "round"
    },
    paint: {
      "line-color": baseColors[i % 4],
      "line-width": 4
    }
  });
}

/**
 * generic response handler
 * @param {*} response 
 */

export const handleResponse = (response) => {
  if (response.status == 200) {
    return response.json();
  } else {
    throw Error(`Fetch Failed: ${response.status}`)
  }
}

/**
 * generic error handler
 * @param {*} error 
 */
export const handleError = (error) => {
  console.log('error', error)
}