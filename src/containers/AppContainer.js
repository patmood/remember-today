import React, { PropTypes } from 'react'
import { Link } from 'react-context-router'

const NotFound = () => <div>Not Found</div>

class AppContainer extends React.Component {
  render () {
    const { route } = this.context
    const Comp = route.component || NotFound

    return (
      <div>
        <h1>AppContainer</h1>
        <Link href='/' className='btn btn-primary mr1'>Home</Link>
        <Link href='/app' className='btn btn-primary mr1'>App</Link>
        <Comp />
      </div>
    )
  }
}

AppContainer.contextTypes = {
  history: PropTypes.object,
  route: PropTypes.object
}

export default AppContainer
