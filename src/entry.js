import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import FirebaseApi from './FirebaseApi'

import AppContainer from './containers/AppContainer'
import './css/index.scss'

// actions
import { authInitialized } from './actions/authActions'

// Store
import initialState from './reducers/initialState';
import configureStore from './configureStore';
const store = configureStore(initialState);

FirebaseApi
  .initAuth()
  .then(user => {
    store.dispatch(authInitialized(user))

    ReactDOM.render(
      <Provider store={store}>
        <AppContainer />
      </Provider>,
      document.getElementById('root')
    )
  })
  .catch(err => {
    console.log('Firebase auth error:', err)
    //TODO dispatch auth error action
  })
