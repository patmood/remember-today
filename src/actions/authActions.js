import firebaseApi from '../FirebaseApi'

import { userLoadedSuccess, userCreated } from './userActions'
import { requestError, beginRequest } from './pendingRequestActions'

export function authInitialized(user) {
  return (dispatch) => {
    dispatch(authInitializedDone())
    if (user) {
      dispatch(authLoggedIn(user.uid))
    } else {
      dispatch(authLoggedOutSuccess())
    }
  }
}

export function authLoggedIn(userUID) {
  return (dispatch) => {
    dispatch(authLoggedInSuccess(userUID))
    dispatch(beginRequest())
    firebaseApi.getChildAddedByKeyOnce('/users', userUID)
      .then(user => {
        dispatch(userLoadedSuccess(user.val()))
        // TODO: dispatch action to navigate somewhere here
      })
      .catch(error => {
        dispatch(beginRequest())
        // TODO: better error handling
        throw(error)
      })
  }
}

export function createUserWithEmailAndPassword(user) {
  return (dispatch) => {
    dispatch(beginRequest())
    return firebaseApi.createUserWithEmailAndPassword(user)
      .then(user => {
        return dispatch(userCreated(user))
      }).catch(error => {
        dispatch(requestError(error))
        // @TODO better error handling
        throw(error)
      })
  }
}

export function signOut() {
  return (dispatch, getState) => {
    dispatch(beginRequest())
    return firebaseApi.authSignOut()
      .then(
        () => {
          dispatch(authLoggedOutSuccess())
          // Redirect if they're on a page that requires auth
        })
      .catch(error => {
        dispatch(requestError(error))
        // @TODO better error handling
        throw(error)
      })
  }
}

export function authInitializedDone() {
  return {
    type: 'AUTH_INITIALIZATION_DONE',
  }
}

export function authLoggedInSuccess(userUID) {
  return {
    type: 'AUTH_LOGGED_IN_SUCCESS',
    userUID,
  }
}

export function authLoggedOutSuccess() {
  return {
    type: 'AUTH_LOGGED_OUT_SUCCESS',
  }
}
