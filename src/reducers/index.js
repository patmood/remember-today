import { combineReducers } from 'redux'
import base from './baseReducer'
import pendingRequest from './pendingRequestReducer'
import auth from './authReducer'
import user from './userReducer'
import posts from './postReducer'
import activePost from './activePostReducer'

const rootReducer = combineReducers({
  base,
  pendingRequest,
  auth,
  user,
  posts,
  activePost,
})

export default rootReducer
