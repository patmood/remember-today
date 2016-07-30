import firebaseApi from '../FirebaseApi'

export function setActivePost(userUID, date) {
  return (dispatch) => {
    firebaseApi.getValueByPathOnce(`/posts/${userUID}/${date}`)
      .then(post => {
        if (!post) return null
        dispatch({ type: 'SET_ACTIVE_POST', post: post.val() })
      })
      .catch(error => {
        // TODO: better error handling
        throw(error)
      })
  }
}
