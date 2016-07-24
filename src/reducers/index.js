import { combineReducers } from 'redux'
import base from './baseReducer'
import pendingRequest from './pendingRequestReducer'
import auth from './authReducer'
import user from './userReducer'

const rootReducer = combineReducers({
  base,
  pendingRequest,
  auth,
  user,
})

export default rootReducer
