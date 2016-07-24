import initialState from './initialState'

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case 'USER_CREATED_SUCCESS':
      return Object.assign({}, state, action.user)
    case 'USER_IS_ADMIN_SUCCESS':
      return Object.assign({}, state, {isAdmin: true})
    case 'USER_LOADED_SUCCESS':
      return initialState.user
    default:
      return state
  }
}
