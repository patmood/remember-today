import Immutable from 'immutable'

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
  user: {
    isAdmin: undefined
  },
  auth: {
    isLogged: false,
    currentUserUID: null,
    initialized: false
  },
};
