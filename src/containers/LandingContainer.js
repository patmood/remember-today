import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signOut } from '../actions/authActions'

import Registration from './Registration'
import Signin from './Signin'

class LandingContainer extends React.Component {
  render () {
    return (
      <div className='p2'>
        <div>
          This is the un authed view
        </div>
        <Registration />
        <Signin />
      </div>
    )
  }
}

LandingContainer.propTypes = {
  actions: PropTypes.object,
}

function mapStateToProps(state, ownProps) {
  return {
    base: state.base,
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ signOut }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer)
