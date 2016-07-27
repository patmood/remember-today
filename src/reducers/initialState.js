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
  user: null,
  auth: {
    isLogged: false,
    currentUserUID: null,
    initialized: false
  },
};
