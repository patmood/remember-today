import firebaseApi from '../FirebaseApi'

export function postCreate(userUID, post) {
  return (dispatch) => {
    const postKey = firebaseApi.databasePush(`/posts/${userUID}`).key
    return firebaseApi.databaseSet(`/posts/${userUID}/${postKey}`, post)
      .then(() => {
        dispatch(postCreatedSuccess(userUID, postKey))
        return post
      })
      .catch(error => {
        // TODO better error handling
        throw(error)
      })
  }
}

export function postCreatedSuccess(userUID, postKey) {
  return (dispatch) => {
    firebaseApi.getChildAddedByKeyOnce(`/posts/${userUID}`, postKey)
      .then(post => {
        dispatch({ type: 'POST_CREATED_SUCCESS', post: post.val(), postKey })
      })
      .catch(error => {
        // TODO: better error handling
        throw(error)
      })
  }
}

export function getPosts(userUID) {
  return (dispatch) => {
    firebaseApi.getValueByPathOnce(`/posts/${userUID}`)
      .then(posts => {
        dispatch({ type: 'POSTS_FETCHED_SUCCESS', posts: posts.val() })
      })
      .catch(error => {
        // TODO: better error handling
        throw(error)
      })
  }
}
