import * as type from './types.js';
import { SET_ACCESS_TOKEN } from './types.js'

export default {
  [type.SET_USERS](state, users) {
    state.users = users;
  },
  [type.SET_ACCESS_TOKEN](state, access_token) {
    state.access_token = access_token;
  },
  [type.SET_USERNAME](state, username) {
    state.username = username;
  },
};
