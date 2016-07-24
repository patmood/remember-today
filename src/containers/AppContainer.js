import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increment } from '../actions/baseActions'

import Home from '../components/Home'

class AppContainer extends React.Component {
  render () {
    const { base, actions } = this.props

    return (
      <div className='p2'>
        <h1>AppContainer</h1>
        <nav className='mb2'>
          <button onClick={actions.increment} className='btn'>+1 ({base.counter})</button>
        </nav>
        <div>
          <Home />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    base: state.base,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ increment }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
