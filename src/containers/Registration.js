import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createUserWithEmailAndPassword } from '../actions/authActions'

export class Registration extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      user: {
        email: '',
        password: ''
      },
      saving: false
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

    this.setState({saving: true})

    this.props.actions.createUserWithEmailAndPassword(this.state.user)
      .then((user) => {
        console.log('user created', user)
        this.setState({saving: false})
      })
      .catch(error => {
        console.log(error.message)
        this.setState({saving: false})
      })
  }

  render() {
    const { user, saving } = this.state
    return <form>
      <h1>Create account</h1>
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
        disabled={saving}
        value={saving ? 'Signing up...' : 'Sign Up'}
        className='btn btn-primary'
        onClick={this.createUser}/>
    </form>
  }
}

Registration.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ createUserWithEmailAndPassword }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
