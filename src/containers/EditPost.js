import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postCreate } from '../actions/postActions'

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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updatePostState(event) {
    const field = event.target.name
    let post = this.state.post
    post[field] = event.target.value
    return this.setState({post: post})
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({saving: true})

    this.props.actions.postCreate(this.props.user.uid, this.state.post)
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
        onClick={this.handleSubmit}/>
    </form>
  }
}

EditPost.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ postCreate }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
