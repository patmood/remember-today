import firebaseApi from '../FirebaseApi'

import { userLoadedSuccess, userCreated } from './userActions'
import { getPosts } from './postActions'

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
    firebaseApi.getChildAddedByKeyOnce('/users', userUID)
      .then(user => {
        dispatch(userLoadedSuccess(user.val()))
        dispatch(getPosts(userUID))
        // TODO: dispatch action to navigate somewhere here
      })
      .catch(error => {
        // TODO: better error handling
        throw(error)
      })
  }
}

export function createUserWithEmailAndPassword(user) {
  return (dispatch) => {
    return firebaseApi.createUserWithEmailAndPassword(user)
      .then(user => {
        return dispatch(userCreated(user))
      }).catch(error => {
        // @TODO better error handling
        throw(error)
      })
  }
}

export function signInWithEmailAndPassword(user) {
  return (dispatch) => {
    return firebaseApi.signInWithEmailAndPassword(user)
      .then(
        user => {
          dispatch(authLoggedIn(user.uid))
        })
      .catch(error => {
        // @TODO better error handling
        throw(error)
      })
  }
}

export function signOut() {
  return (dispatch, getState) => {
    return firebaseApi.authSignOut()
      .then(
        () => {
          dispatch(authLoggedOutSuccess())
          // Redirect if they're on a page that requires auth
        })
      .catch(error => {
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
