export const StatusCodes = {
  failure : 'failure',
  progress: 'in progress',
  success : 'success'
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