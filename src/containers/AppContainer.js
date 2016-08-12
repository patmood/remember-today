import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signOut } from '../actions/authActions'

import AuthedContainer from './AuthedContainer'
import LandingContainer from './LandingContainer'


class AppContainer extends React.Component {
  render () {
    const { user } = this.props

    return user ? <AuthedContainer /> : <LandingContainer />
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
