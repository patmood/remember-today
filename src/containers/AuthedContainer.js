import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increment } from '../actions/baseActions'
import { signOut } from '../actions/authActions'
import { setActivePost } from '../actions/activePostActions'

import Home from '../components/Home'
import ActivePost from './ActivePost'
import CalendarChart from '../components/CalendarChart'

class AuthedContainer extends React.Component {
  constructor (props) {
    super(props)
    this.setActivePost = this.setActivePost.bind(this)
  }

  setActivePost (date) {
    this.props.actions.setActivePost(this.props.user.uid, date)
  }

  render () {
    const { user, posts, actions } = this.props

    return (
      <div className='p2'>
        <div>
          <span>{user.email}</span>
          <button onClick={actions.signOut} className='btn btn-primary bg-red right'>Sign out</button>
        </div>
        <h1>AuthedContainer</h1>
        <Home />
        <ActivePost />
        { user ?
          <CalendarChart days={posts} onDayClick={this.setActivePost} />
          : null
        }
      </div>
    )
  }
}

AuthedContainer.propTypes = {
  actions: PropTypes.object,
}

function mapStateToProps(state, ownProps) {
  return {
    base: state.base,
    user: state.user,
    posts: state.posts.toJS(),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ increment, signOut, setActivePost }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthedContainer)
