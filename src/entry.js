import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import firebase from 'firebase'
import firebaseConfig from '../firebase-config.json'

import AppContainer from './containers/AppContainer'
import './css/index.scss'

// Store
import initialState from './reducers/initialState';
import configureStore from './configureStore';
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
