import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export class EditPost extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      post: {
        body: ''
      },
      saving: false
    }

    this.updatePostState = this.updatePostState.bind(this)
    this.createPost = this.createPost.bind(this)
  }

  updatePostState(event) {
    const field = event.target.name
    let post = this.state.post
    post[field] = event.target.value
    return this.setState({post: post})
  }

  createPost(event) {
    event.preventDefault()

    this.setState({saving: true})

    this.props.actions.createPost(this.state.post)
      .then((post) => {
        this.setState({saving: false})
      })
      .catch(error => {
        console.log(error.message)
        this.setState({saving: false})
      })
  }

  render() {
    const { saving } = this.state
    return <form>
      <h1>Create Post</h1>
      <textarea
        type='text'
        name='body'
        placeholder='What happened today?'
        className='input'
        onChange={this.updatePostState} >
      </textarea>

      <input
        type='submit'
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className='btn btn-primary'
        onClick={this.createPost}/>
    </form>
  }
}

EditPost.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({  }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
