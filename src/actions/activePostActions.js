import firebaseApi from '../FirebaseApi'

export function setActivePost(userUID, date) {
  return (dispatch) => {
    firebaseApi.getValueByPathOnce(`/posts/${userUID}/${date}`)
      .then(post => {
        const blankPost = {
          date,
          title: '',
          body: '',
        }
        dispatch({ type: 'SET_ACTIVE_POST', post: (post && post.val()) || blankPost })
      })
      .catch(error => {
        // TODO: better error handling
        throw(error)
      })
  }
}
