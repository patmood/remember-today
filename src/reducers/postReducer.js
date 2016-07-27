import initialState from './initialState'
import Immutable from 'immutable'

export default function postReducer(state = initialState.posts, action) {
  switch (action.type) {
    case 'POST_CREATED_SUCCESS':
      const post = Immutable.fromJS(action.post)
      return state.set(action.postKey, post)
    case 'POSTS_FETCHED_SUCCESS':
      return Immutable.fromJS(action.posts)
    default:
      return state
  }
}
