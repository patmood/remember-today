import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postCreate } from '../actions/postActions'
import moment from 'moment'

export class ActivePost extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      post: props.activePost,
      saving: false,
    }

    this.updatePostState = this.updatePostState.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.activePost.title !== this.props.activePost.title) {
      this.setState({ post: nextProps.activePost })
    }
  }

  updatePostState(event) {
    const field = event.target.name
    let post = this.state.post
    post[field] = event.target.value
    return this.setState({ post: post })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({ saving: true })

    const { post } = this.state

    this.props.actions.postCreate(this.props.user.uid, post)
      .then((post) => {
        this.setState({saving: false})
      })
      .catch(error => {
        console.log(error.message)
        this.setState({saving: false})
      })
  }

  render() {
    const { activePost } = this.props
    const { saving, post } = this.state
    return <form>
      <h1>Create Post</h1>
      <textarea
        name='title'
        value={post.title}
        placeholder='Title of today'
        className='input'
        onChange={this.updatePostState} >
      </textarea>
      <input
        type='text'
        name='date'
        value={post.date}
        placeholder='Date'
        className='input'
        onChange={this.updatePostState} />
      <textarea
        name='body'
        value={post.body}
        placeholder='What happened today?'
        className='input'
        style={{ minHeight: 200 }}
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

ActivePost.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    activePost: state.activePost,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ postCreate }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivePost)
