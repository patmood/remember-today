import initialState from './initialState'

export default function pendingRequestReducer(state = initialState.pendingRequest, action) {
    if (action.type === 'BEGIN_REQUEST') {
      return state + 1
    } else if (action.type === 'REQUEST_ERROR' || action.type.slice(-8) === '_SUCCESS') {
      // Request is finished
      return state - 1
    } else {
      return state
    }
}