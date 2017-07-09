export const handleRouteRequest = (response, store) => {
  console.log('route request', response)
}

export const handleResponse = (response, fn) => {
  if (response.status == 200) {
    return response.json();
  } else {
    throw Error(`Fetch Failed: ${response.status}`)
  }
}

export const handleError = (error) => {
  console.log('error', error)
}