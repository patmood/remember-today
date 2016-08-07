import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signOut } from '../actions/authActions'

import AuthedContainer from './AuthedContainer'
import LandingContainer from './LandingContainer'


class AppContainer extends React.Component {
  render () {
    const { user, actions } = this.props

    return (
      <div className='p2'>
        <nav className='mb2'>
          <button onClick={actions.signOut} className='btn btn-primary bg-red right'>Sign out</button>
          <div className='inline-block right'>
            { user ? user.email : null }
          </div>
        </nav>
        <div>
          { user ? <AuthedContainer /> : <LandingContainer /> }
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
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ signOut }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
