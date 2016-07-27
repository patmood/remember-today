import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPosts } from '../actions/postActions'

export class ListPosts extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.getAllPosts = this.getAllPosts.bind(this)
  }

  componentDidMount () {
    this.getAllPosts()
  }

  getAllPosts () {
    const userUID = this.props.user.uid
    this.props.actions.getPosts(userUID)
  }

  render() {
    const { posts } = this.props
    return <div>
      <div>
        <button onClick={this.getAllPosts}>
          Fetch
        </button>
      </div>
      <div>
        { posts.map((val, key) =>
          <div key={key}>
          <div className='bold'>{val.get('title')}</div>
          <div>{val.get('body')}</div>
          </div>).toArray()
        }
      </div>
    </div>
  }

}

ListPosts.propTypes = {
  actions: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    posts: state.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getPosts }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)
