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
  posts: [],
  user: {
    isAdmin: undefined
  },
  auth: {
    isLogged: false,
    currentUserUID: null,
    initialized: false
  },
};
