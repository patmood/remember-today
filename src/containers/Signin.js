import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signInWithEmailAndPassword } from '../actions/authActions'

export class Signin extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      user: {
        email: '',
        password: ''
      },
      pending: false
    }

    this.updateUserState = this.updateUserState.bind(this)
    this.createUser = this.createUser.bind(this)
  }

  updateUserState(event) {
    const field = event.target.name
    let user = this.state.user
    user[field] = event.target.value
    return this.setState({user: user})
  }

  createUser(event) {
    event.preventDefault()

    this.setState({pending: true})

    this.props.actions.signInWithEmailAndPassword(this.state.user)
      .then((user) => {
        this.setState({pending: false})
      })
      .catch(error => {
        console.log(error.message)
        this.setState({pending: false})
      })
  }

  render() {
    const { user, pending } = this.state
    return <form>
      <h1>Sign In</h1>
      <input
        type='text'
        name='email'
        placeholder='Email'
        className='input'
        onChange={this.updateUserState}
        value={user.email} />

      <input
        type='password'
        name='password'
        placeholder='Password'
        className='input'
        onChange={this.updateUserState}
        value={user.password} />

      <input
        type='submit'
        disabled={pending}
        value={pending ? 'Signing in...' : 'Sign In'}
        className='btn btn-primary'
        onClick={this.createUser}/>
    </form>
  }
}

Signin.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ signInWithEmailAndPassword }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
