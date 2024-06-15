import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

const state = {
  users: [],
  username: '',
  access_token: ''
}

export default new Vuex.Store({
  getters: {
    getUsers: (state) => state.users,
    getToken: (state) => state.access_token,
    getUsername: (state) => state.username
  },

  state,
  actions,
  mutations
})
