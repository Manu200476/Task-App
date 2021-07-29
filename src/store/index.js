import { createStore } from 'vuex'
import router from '../router/index.js'
import localStorageService from '../services/localstorage.service.js'

const { FIREBASE_SIGN_IN } = process.env
const { FIREBASE_SIGN_UP } = process.env
const { FIREBASE_BBDD } = process.env

export default createStore({
  state: {
    tasks: [],
    task: {},
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    load(state, payload) {
      state.tasks = payload
    },
    set(state, payload) {
      state.tasks.push(payload)
    },
    delete(state, payload) {
      state.tasks = state.tasks.filter((item) => item.id !== payload)
    },
    task(state, payload) {
      if (!state.tasks.find((item) => item.id === payload)) {
        router.push('/')
        return
      }
      state.task = state.tasks.find((item) => item.id === payload)
    },
    update(state, payload) {
      state.tasks = state.tasks.map((item) => (item.id === payload.id ? payload : item))
      router.push('/')
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
    async loadDatainDB({ commit, state }) {
      if (localStorage.getItem('user')) {
        commit('setUser', JSON.parse(localStorage.getItem('user')))
      } else {
        commit('setUser', null)
      }
      try {
        const res = await fetch(`${FIREBASE_BBDD}/${state.user.localId}.json?auth=${state.user.idToken}`)
        const data = await res.json()
        const taskArray = []
        for (const id in data) {
          taskArray.push(data[id])
        }
        commit('load', taskArray)
      } catch (error) {
        console.error(error)
      }
    },
    async setTask({ commit, state }, task) {
      try {
        const res = await fetch(`${FIREBASE_BBDD}/${state.user.localId}/${task.id}.json?auth=${state.user.idToken}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(task),
        })
        const data = res.json()
      } catch (e) {
        console.log(e)
      }
      commit('set', task)
    },
    async deleteTask({ commit, state }, id) {
      try {
        await fetch(`${FIREBASE_BBDD}/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
          method: 'DELETE',
        })
        commit('delete', id)
      } catch (err) {
        console.error(err)
      }
    },
    setTarea({ commit }, id) {
      commit('task', id)
    },
    async updateTask({ commit, state }, task) {
      try {
        const res = await fetch(`${FIREBASE_BBDD}/${state.user.localId}/${task.id}.json?auth=${state.user.idToken}`, {
          method: 'PATCH',
          body: JSON.stringify(task),
        })
        const data = await res.json()
        commit('update', data)
        router.push('/')
      } catch (err) {
        console.error(err)
      }
    },
  },
  getters: {
    checkUser(state) {
      return !!state.user
    },
  },
})
