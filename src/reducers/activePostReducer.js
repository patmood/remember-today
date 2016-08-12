import initialState from './initialState'
import { Map } from 'immutable'

// eslint-disable-next-line
export default function activePostReducer(state = Map(initialState.activePost), action) {
  switch (action.type) {
    case 'SET_ACTIVE_POST':
      // eslint-disable-next-line
      return Map(action.post)
    default:
      return state
  }
}
