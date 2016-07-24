import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increment } from '../actions/baseActions'

import { Link } from 'react-context-router'

const NotFound = () => <div>Not Found</div>

class AppContainer extends React.Component {
  render () {
    const { route } = this.context
    const { base, actions } = this.props
    const Comp = route.component || NotFound

    return (
      <div className='p2'>
        <h1>AppContainer</h1>
        <nav className='mb2'>
          <Link href='/' className='btn btn-primary mr1'>Home</Link>
          <Link href='/app' className='btn btn-primary mr1'>App</Link>
          <button onClick={actions.increment} className='btn'>+1 ({base.counter})</button>
        </nav>
        <div>
          <Comp />
        </div>
      </div>
    )
  }
}

AppContainer.contextTypes = {
  history: PropTypes.object,
  route: PropTypes.object
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
