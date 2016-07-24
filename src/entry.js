import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-context-router'
import { Provider } from 'react-redux';

import firebase from 'firebase'
import firebaseConfig from '../firebase-config.json'

import AppContainer from './containers/AppContainer'
import Home from './components/Home'
import App from './components/App'
import './css/index.scss'

// Store
import initialState from './reducers/initialState';
import configureStore from './configureStore';
const store = configureStore(initialState);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/app',
    component: App,
  },
]

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes}>
    <AppContainer />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
