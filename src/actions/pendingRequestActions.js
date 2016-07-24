export function beginRequest () {
  return {
    type: 'BEGIN_REQUEST',
  }
}

export function requestError () {
  return {
    type: 'REQUEST_ERROR',
  }
}
