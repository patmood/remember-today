import initialState from './initialState'
import Immutable from 'immutable'

export default function postReducer(state = initialState.posts, action) {
  switch (action.type) {
    case 'POST_CREATED_SUCCESS':
      return state.set(action.postKey, action.post)
    default:
      return state
  }
}
