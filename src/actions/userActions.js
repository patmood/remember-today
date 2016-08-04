import firebaseApi from '../FirebaseApi'

import { authLoggedIn } from './authActions'

function extractUserProperties(firebaseUser) {

  const user = {}
  const userProperties = [
    'displayName',
    'email',
    'emailVerified',
    'isAnonymous',
    'photoURL',
    'providerData',
    'providerId',
    'refreshToken',
    'uid',
    'isAdmin'
  ]

  userProperties.forEach((prop) => {
    if (prop in firebaseUser) {
      user[prop] = firebaseUser[prop]
    }
  })

  return user
}

export function userCreated(user) {
  return (dispatch) => {
    return firebaseApi.databaseSet('/users/' + user.uid, extractUserProperties(user))
      .then(() => {
        dispatch(authLoggedIn(user.uid))
        dispatch(userCreatedSuccess())
        return user
      })
      .catch(error => {
        // @TODO better error handling
        throw(error)
      })
  }
}

export function userCreatedSuccess() {
  return {
    type: 'USER_CREATED_SUCCESS'
  }
}

export function userLoadedSuccess(user) {
  return {
    type: 'USER_LOADED_SUCCESS', user: extractUserProperties(user)
  }
}

export function userIsAdminSuccess() {
  return {
    type: 'USER_IS_ADMIN_SUCCESS'
  }
}
