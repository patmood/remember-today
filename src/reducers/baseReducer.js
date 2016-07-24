import initialState from './initialState'

export default function userReducer(state = initialState.base, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { counter: state.counter + 1 })
    case 'types.USER_IS_ADMIN_SUCCESS':
      return Object.assign({}, state, {isAdmin: true})
    case 'types.AUTH_LOGGED_OUT_SUCCESS':
      return initialState.user
    default:
      return state
  }
}
