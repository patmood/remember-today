import initialState from './initialState'

export default function activePostReducer(state = initialState.activePost, action) {
  switch (action.type) {
    case 'SET_ACTIVE_POST':
      return action.post
    default:
      return state
  }
}
