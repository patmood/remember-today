import { combineReducers } from 'redux'
import base from './baseReducer'
import pendingRequests from './pendingRequestsReducer'
import auth from './authReducer'

const rootReducer = combineReducers({
  base,
  pendingRequests,
  auth,
})

export default rootReducer
