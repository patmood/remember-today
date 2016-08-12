import { Map } from 'immutable'
import moment from 'moment'

export default {
  base: {
    counter: 0,
  },
  // eslint-disable-next-line
  posts: Map(),
  // eslint-disable-next-line
  activePost: Map({
    date: moment().format('YYYYMMDD'),
    title: '',
    body: '',
  }),
  user: null,
  auth: {
    isLogged: false,
    currentUserUID: null,
    initialized: false
  },
};
