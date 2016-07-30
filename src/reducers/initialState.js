import Immutable from 'immutable'
import moment from 'moment'

export default {
  base: {
    counter: 0,
  },
  pendingRequest: 0,
  // routesPermissions: {
  //   requireAuth: [
  //     '/admin'
  //   ],
  //   routesRequireAdmin: [
  //     '/admin'
  //   ]
  // },
  // routing: {},
  posts: new Immutable.Map(),
  activePost: {
    date: moment().format('YYYYMMDD'),
    title: '',
    body: '',
  },
  user: null,
  auth: {
    isLogged: false,
    currentUserUID: null,
    initialized: false
  },
};
