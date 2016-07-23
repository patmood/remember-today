import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-context-router'
import firebase from 'firebase'
import firebaseConfig from '../firebase-config.json'

import AppContainer from './containers/AppContainer'
import Home from './components/Home'
import App from './components/App'
import './css/index.scss'

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
  <Router routes={routes}>
    <AppContainer />
  </Router>,
  document.getElementById('root')
)

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
