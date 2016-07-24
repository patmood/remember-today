import initialState from './initialState'

export default function baseReducer(state = initialState.base, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { counter: state.counter + 1 })
    default:
      return state
  }
}
