import firebaseApi from '../FirebaseApi'
import { requestError, beginRequest } from './pendingRequestActions'

export function postCreate(userUID, post) {
  return (dispatch) => {
    beginRequest()
    const postKey = firebaseApi.databasePush(`/users/${userUID}/posts`).key
    return firebaseApi.databaseSet(`/users/${userUID}/posts/${postKey}`, post)
      .then(() => {
        dispatch(postCreatedSuccess(userUID, postKey))
        return post
      })
      .catch(error => {
        dispatch(requestError(error))
        // @TODO better error handling
        throw(error)
      })
  }
}

export function postCreatedSuccess(userUID, postKey) {
  return (dispatch) => {
    dispatch(beginRequest())
    firebaseApi.getChildAddedByKeyOnce(`/users/${userUID}/posts`, postKey)
      .then(post => {
        dispatch({ type: 'POST_CREATED_SUCCESS', post: post.val(), postKey })
      })
      .catch(error => {
        // TODO: better error handling
        throw(error)
      })
  }
}
