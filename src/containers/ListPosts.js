import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postCreate } from '../actions/postActions'

export class ListPosts extends React.Component {
  // constructor(props, context) {
  //   super(props, context)
  // }

  componentDidMount () {
    // get list of posts
  }

  render() {
    const { posts } = this.props
    return <div>
      {posts.map((val, key) => <div key={key}>
        <div className='bold'>{val.title}</div>
        <div>{val.body}</div>
      </div>).toArray()}
    </div>
  }
}

ListPosts.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ postCreate }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)
