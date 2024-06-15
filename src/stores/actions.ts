import axios from 'axios'
import * as type from './types.js'

const baseUrl = 'https://technical-test-kma.vercel.app/authorization/'
const configHeaders = {
  'content-type': 'application/json',
  'Accept': 'application/json'
}
const authHeaders = {
  ...configHeaders,
  'Authorization': `Bearer ${localStorage.access_token}`
}
export default {
  createUser({ commit }, user) {
    commit('ADD_USER', user)
  },
  initVideoData({ commit }, data) {
    commit('INIT_VDIEO_DATA', data)
  },
  initMeCommentData({ commit }, data) {
    commit('INIT_COMMENT_DATA', data)
  },
  async signUp({ commit }, payload) {
    try {
      const data = await axios.post(
        baseUrl + 'signUp',
        JSON.stringify(payload),
        {
          headers: configHeaders
        }
      )
      if (data?.data?.access_token) {
        localStorage.access_token = data?.data?.access_token
      }

      return true
    } catch (error) {
      alert(error)
      console.log(error)
      return false
    }
  },
  async signIn({ commit }, payload) {
    try {
      const data = await axios.post(
        baseUrl + 'signIn',
        JSON.stringify(payload),
        {
          headers: configHeaders
        }
      )
      if (data?.data?.access_token) {
        localStorage.access_token = data?.data?.access_token
        localStorage.username = payload.username
      }
      return true
    } catch (error) {
      alert(error)
      console.log(error)
      return false
    }
  },
  async fetchUsers({ commit }, payload) {
    try {
      const data = await axios.get(
        baseUrl,
        {
          headers: authHeaders
        }
      )
      commit(type.SET_USERS, data.data)
    } catch (error) {
      alert(error)
      console.log(error)
    }
  }
}
