import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increment } from '../actions/baseActions'
import { signOut } from '../actions/authActions'

import Home from '../components/Home'
import EditPost from './EditPost'
import ListPosts from './ListPosts'
import Registration from './Registration'
import Signin from './Signin'

class AppContainer extends React.Component {
  render () {
    const { base, user, actions, pendingRequest } = this.props

    return (
      <div className='p2'>
        <h1>AppContainer</h1>
        <nav className='mb2'>
          <div className='inline-block left'>{pendingRequest}</div>
          <button onClick={actions.increment} className='btn left'>+1 ({base.counter})</button>
          <button onClick={actions.signOut} className='btn btn-primary bg-red right'>Sign out</button>
          <div className='inline-block right'>
            { user ? user.email : null }
          </div>
        </nav>
        <div>
          <Home />
          <EditPost />
          { user ? <ListPosts /> : null }
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
    pendingRequest: state.pendingRequest,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ increment, signOut }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
