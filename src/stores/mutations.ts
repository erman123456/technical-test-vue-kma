import * as type from './types.js';

export default {
  [type.SET_USERS](state, users) {
    state.users = users;
  },
};
