export default {
  base: {
    counter: 0,
  },
  pendingRequests: 0,
  // routesPermissions: {
  //   requireAuth: [
  //     '/admin'
  //   ],
  //   routesRequireAdmin: [
  //     '/admin'
  //   ]
  // },
  // routing: {},
  // user: {
  //   isAdmin: undefined
  // },
  auth: {
    isLogged: false,
    currentUserUID: null,
    initialized: false
  },
};
