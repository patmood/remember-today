import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import FirebaseApi from './FirebaseApi'

import AppContainer from './containers/AppContainer'
import './css/index.scss'

// actions
import { authInitialized } from './actions/authActions'
import { requestError, beginRequest } from './actions/pendingRequestActions'

// Store
import initialState from './reducers/initialState';
import configureStore from './configureStore';
const store = configureStore(initialState);

store.dispatch(beginRequest())
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
