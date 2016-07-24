import { combineReducers } from 'redux'
import base from './baseReducer'
import pendingRequestsReducer from './pendingRequestsReducer'

const rootReducer = combineReducers({
  base,
  pendingRequestsReducer,
})

export default rootReducer
