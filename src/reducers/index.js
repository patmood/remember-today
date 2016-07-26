import { combineReducers } from 'redux'
import base from './baseReducer'
import pendingRequest from './pendingRequestReducer'
import auth from './authReducer'
import user from './userReducer'
import posts from './postReducer'

const rootReducer = combineReducers({
  base,
  pendingRequest,
  auth,
  user,
  posts,
})

export default rootReducer
