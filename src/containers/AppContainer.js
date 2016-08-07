import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increment } from '../actions/baseActions'
import { signOut } from '../actions/authActions'
import { setActivePost } from '../actions/activePostActions'

import Home from '../components/Home'
import ActivePost from './ActivePost'
import Registration from './Registration'
import Signin from './Signin'
import CalendarChart from '../components/CalendarChart'

class AppContainer extends React.Component {
  render () {
    const { base, user, posts, actions } = this.props

    return (
      <div className='p2'>
        <h1>AppContainer</h1>
        <nav className='mb2'>
          <button onClick={actions.signOut} className='btn btn-primary bg-red right'>Sign out</button>
          <div className='inline-block right'>
            { user ? user.email : null }
          </div>
        </nav>
        <div>
          <Home />
          <ActivePost />
          { user ?
            <CalendarChart days={posts} onDayClick={actions.setActivePost.bind(null, user.uid)} />
            : null
          }
          <Registration />
          <Signin />
        </div>
      </div>
    )
  }
}

AppContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
