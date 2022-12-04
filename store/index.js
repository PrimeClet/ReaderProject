import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// let err
export const strict = false
export const state = () => ({
  token: null,
})

export const mutations = {

}

export const actions = {
}

export const getters = {
  loggedIn (state) {
    return state.token !== null
  }
}
