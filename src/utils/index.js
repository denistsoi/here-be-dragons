export const StatusCodes = {
  failure : 'failure',
  progress: 'in progress',
  success : 'success'
}

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
      "line-color": baseColors[i%4],
      "line-width": 4
    }       
  });
}

export const handleRouteRequest = (response, store) => {
  if (response.status == 200) {
    return response.json();
  } else {
    throw Error(`Fetch Failed: ${response.status}`)
  }
}

export const handleResponse = (response) => {
  if (response.status == 200) {
    return response.json();
  } else {
    throw Error(`Fetch Failed: ${response.status}`)
  }
}

export const handleError = (error) => {
  console.log('error', error)
}