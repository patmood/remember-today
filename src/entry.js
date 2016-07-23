import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-context-router'
import AppContainer from './containers/AppContainer'
import Home from './components/Home'
import App from './components/App'
import './css/index.scss'
// import '../node_modules/ace-css/css/ace.css'

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