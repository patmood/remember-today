import firebaseApi from '../FirebaseApi'

export function postCreate(userUID, post) {
  return (dispatch) => {
    return firebaseApi.databaseSet(`/posts/${userUID}/${post.date}`, post)
      .then(() => {
        dispatch(postCreatedSuccess(userUID, post.date))
        firebaseApi.databaseSet(`/days/${userUID}/${post.date}/post`, true)
        return post
      })
      .catch(error => {
        // TODO better error handling
        throw(error)
      })
  }
}

export function postCreatedSuccess(userUID, date) {
  return (dispatch) => {
    firebaseApi.getChildAddedByKeyOnce(`/posts/${userUID}`, date)
      .then(post => {
        dispatch({ type: 'POST_CREATED_SUCCESS', post: post.val(), date })
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
        if (!posts) return null
        dispatch({ type: 'POSTS_FETCHED_SUCCESS', posts: posts.val() })
      })
      .catch(error => {
        // TODO: better error handling
        throw(error)
      })
  }
}
