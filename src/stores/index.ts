import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

const state = {
  users: [],
}

export default new Vuex.Store({
  getters: {
    getUsers: (state) => state.users,
  },

  state,
  actions,
  mutations
})
