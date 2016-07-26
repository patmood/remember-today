import initialState from './initialState'

export default function postReducer(state = initialState.posts, action) {
  switch (action.type) {
    case 'POST_CREATED_SUCCESS':
      const newState = state
      newState.push(action.post)
      return newState
    default:
      return state
  }
}
