import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increment } from '../actions/baseActions'

import Home from '../components/Home'
import Registration from './Registration'

class AppContainer extends React.Component {
  render () {
    const { base, user, actions } = this.props

    return (
      <div className='p2'>
        <h1>AppContainer</h1>
        <nav className='mb2'>
          <button onClick={actions.increment} className='btn'>+1 ({base.counter})</button>
          <div className='inline-block right'>
            {user.email}
          </div>
        </nav>
        <div>
          <Home />
          <Registration />
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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ increment }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
