import localStorageService from '../services/localstorage.service.js'
import router from '../router/index.js'

const { FIREBASE_SIGN_IN, FIREBASE_SIGN_UP } = process.env

const userModule = {
  state: () => ({
    user: null,
  }),
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
  },
  actions: {
    async signUp({ commit }, user) {
      try {
        const res = await fetch(FIREBASE_SIGN_UP, {
          method: 'POST',
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true,
          }),
        })
        const data = await res.json()
        if (data.error) {
          console.error(data.error)
          return
        }
        commit('setUser', data)
        router.push('/')
        localStorageService.set('user', data)
      } catch (e) {
        console.error(e)
      }
    },
    async signIn({ commit }, user) {
      try {
        const res = await fetch(FIREBASE_SIGN_IN, {
          method: 'POST',
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true,
          }),
        })
        const data = await res.json()
        if (data.error) {
          return
        }
        commit('setUser', data)
        router.push('/')
        localStorageService.set('user', data)
      } catch (e) {
        console.error(e)
      }
    },
    closeSesion({ commit }) {
      commit('setUser', null)
      router.push('/login')
      localStorageService.remove('user')
    },
  },
  getters: {
    checkUser(state) {
      return !!state.user
    },
  },
}

export default userModule
